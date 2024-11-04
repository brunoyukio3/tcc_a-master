import "./index.scss";
import MenuUsuario from "../../components/MenuUsuario/index.jsx";
import Cabe from "../../components/cabecalho/index.jsx";
import Rodape from "../../components/rodape/index.jsx";
import Card from "../../components/CardProduto/index.jsx";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import FiltroPreco from "../../components/filtro/index.jsx";
import VoltarButton from "../../components/voltar/index.jsx";


export default function Produtos() {
	const [produto, setProduto] = useState([]);
	const [produtosFiltrados, setProdutosFiltrados] = useState([]);
	const [filtrosSelecionados, setFiltrosSelecionados] = useState([]);
	const [precoMax, setPrecoMax] = useState(2000);

	const categorias = [
		"pentes",
		"escovas",
		"shampoo",
		"condicionador",
		"mascara capilar",
		"creme",
		"esfoliante",
		"hidratante",
		"protetor",
		"sabonete",
		"perfumes",
		"maquiagem",
		"batom",
		"delineador",
		"cabelos",
	];

	const buscarProdutos = useCallback(async () => {
		const url = `http://localhost:5031/produto/preco/`;
		const resp = await axios.post(url, { precoMax });
		const produtos = Array.isArray(resp.data) ? resp.data : [];
		setProduto(produtos);
		setProdutosFiltrados(produtos);
	}, [precoMax])


	const filtrarProdutos = useCallback(() => {
		let produtosFiltrados = produto;

		if (filtrosSelecionados.length > 0) {
			produtosFiltrados = produtosFiltrados.filter((item) =>
				filtrosSelecionados.includes(item.categoria.toLowerCase())
			);
		}

		setProdutosFiltrados(produtosFiltrados);
	}, [filtrosSelecionados, produto]);

	const handleFiltroClick = (categoria) => {
		setFiltrosSelecionados((prev) =>
			prev.includes(categoria)
				? prev.filter((filtro) => filtro !== categoria)
				: [...prev, categoria]
		);
	};

	useEffect(() => {
		buscarProdutos();
	}, [precoMax, buscarProdutos]);

	useEffect(() => {
		filtrarProdutos();
	}, [filtrosSelecionados, produto, filtrarProdutos]);

	return (
		<div className="pagina-produtos">
			<header>
				<MenuUsuario />
				<Cabe pesquisar={true} />
			</header>

			<main>
				<VoltarButton />
				<div className="container_principal">
					<div className="filtros">
						<h2>Filtros</h2>
						<FiltroPreco onChange={setPrecoMax} />
						<h2>Tipo de produto</h2>
						<div className="categorias">
							{categorias.map((categoria, idx) => (
								<div key={idx} className="click">
									<input
										className="check"
										type="checkbox"
										checked={filtrosSelecionados.includes(categoria)}
										onChange={() => handleFiltroClick(categoria)}
									/>
									<p>
										{categoria.charAt(0).toUpperCase() + categoria.slice(1)}
									</p>
								</div>
							))}
						</div>
					</div>

					<div className="listaProdutos">
						<h1>Resultados Principais </h1>
						<div className="produtos">
							{produtosFiltrados.length > 0 ? (
								produtosFiltrados.map((item, index) => (
										<Card
											key={index}
											imagem={item.img}
											alt={item.nome}
											preco={item.valor}
											nome={item.nome}
											link={item.id}
										/>
								))
							) : (
								<p>Nenhum produto encontrado</p>
							)}
						</div>
					</div>
				</div>
			</main>

			<footer>
				<Rodape />
			</footer>
		</div>
	);
}
