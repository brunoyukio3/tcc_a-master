import "./index.scss";

import MenuUsuario from "../../components/MenuUsuario/index.jsx";
import Cabe from "../../components/cabecalho/index.jsx";
import Rodape from "../../components/rodape/index.jsx";
import Card from "../../components/CardProduto/index.jsx";

import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

export default function Produto() {

	const { id } = useParams()
	const [produto, setProduto] = useState([]);
	const [relacionados, setRelacionados] = useState([])

	//4.172.207.208:5031
	const host = 'localhost:5031'

	const buscar = useCallback(async () => {
		const url = `http://${host}/select/produto/${id}`

		let resp = await axios.get(url)
		setProduto(resp.data)
	}, [id]);

	
	const buscarRelacionados = useCallback(async () => {
		const url = `http://${host}/produto/nome?buscar=${produto.categoria}`;

	 	let resp = await axios.get(url);
	 	setRelacionados(resp.data);
	}, [produto])


	useEffect(() => {
		buscarRelacionados()
	}, [buscarRelacionados]);

	useEffect(() => {
		buscar()
	}, [buscar]);

	function testar() {
		alert(JSON.stringify(relacionados))
	}

	/*
		"id":5,
		"nome": "Batom"
		"categoria": "Maquiagem"
		"img":"data:image/base64/",
		"descricao":"Batom matte vermelho intenso",
		"valor":20,
		"disponivel":true,
		"estoque":100
	*/

	return (
		<div className="pagina-produto">
			<header>
				<MenuUsuario />
				<Cabe />
			</header>

			<main>
				<button onClick={testar}>Testar</button>
				<button onClick={() => alert(JSON.stringify(produto.categoria))}>produto</button>

				<div className="botao-voltar">
					<Link to={-1}>
						<div className="voltar">
							<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
								<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 19-7-7 7-7" />
							</svg>
							<h1>VOLTAR</h1>
						</div>
					</Link>
				</div>

				<div className="guia">
					<p> home / </p>
					<p> produtos /  </p>
					<p> cremes capilares</p>
				</div>

				<div className="secao-produto">

					<div className="container-flex">
						<div className="imagem-produto">
							<img src={produto.img} alt={produto.img} />
						</div>

						<div className="info">
							<h1>{produto.nome}</h1>
							<h2>R$ {Number(produto.valor).toFixed(2)}</h2>

							<hr />

							<div>
								<h2>Categoria</h2>
								<p>{produto.categoria}</p>
							</div>

							<div className="numero">
								<img
									src="/assets/images/RedesSociais/whatsapp.svg"
									alt="whatsapp"
								/>
								<p>{"(11) 9999-9999"}</p>
							</div>
						</div>
					</div>

					<div className="descricao">
						<hr className="linha" />
						<h1>Descrição</h1>
						<p>
							{produto.descricao}
						</p>
					</div>
				</div>


				{relacionados && 
				
				<div className="Produtos-relacionados">
					<h1>Produtos Relacionados</h1>

					<div className="produtos">

						{relacionados.map((item, index) => (
							<Card
								key={index}
								imagem={item.img}
								alt={item.img}
								preco={item.valor}
								nome={item.nome}
								link={item.id}
							/>
						))}

						{/* <Card
                            imagem="/assets/images/RedesSociais/whatsapp.svg"
                            alt="imagem"
                            preco={50}
                            nome="nome"
                        /> */}
					</div> 
				</div>
				}
			</main>

			<footer>
				<Rodape />
			</footer>
		</div>
	);
}