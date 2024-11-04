import Rodape from "../../components/rodape/index.jsx";
import { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import axios from "axios";
import "./index.scss";
import Cabe from "../../components/cabecalho/index.jsx";
import VoltarButton from "../../components/voltar/index.jsx";
import { toast } from "react-toastify";

export default function Cadastrar() {
    const navigate = useNavigate();

    const [token, setToken] = useState(null);
    const Navigate = useNavigate();

    const [nome, setnome] = useState("");
    const [categoria, setcategoria] = useState("");

    const [img, setImg] = useState("");
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState("");
    const [estoque, setEstoque] = useState(0);
    const [disponivel, setDisponivel] = useState(false);
    const { id } = useParams();

    //4.172.207.208:5031
    const host = "localhost:5031";

    function alterarImagem(e) {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImg(reader.result);
            };

            reader.readAsDataURL(file);
        }
    }

    function aumentar() {
        if (estoque < 999) {
            setEstoque(Number(estoque) + 1);
        }
    }

    function diminuir() {
        if (estoque > 0) {
            setEstoque(estoque - 1);
        }
    }

    function teclaApertada(e) {
        if (e.key === "Enter") {
            salvar();
        }
    }

    async function salvar() {
        const paramCorpo = {
            nome: nome,
            categoria: categoria,
            img: img,
            descricao: descricao,
            valor: valor,
            disponivel: disponivel,
            estoque: estoque,
        };

        for (const [chave, valor] of Object.entries(paramCorpo)) {
            if (valor === undefined || valor === null || valor === "") {
                toast.warning(`preencha o campo ${chave}`);
                return;
            }
        }

        if (id === undefined) {
            //inserir
            const url = `http://${host}/insert/produto?x-access-token=${token}`;
            let resp = await axios.post(url, paramCorpo);
            alert(resp)
            navigate("/consultar");
            toast.success("Produto adicionado Id: " + resp.data.id);
        } else {
            //atualizar

            const config = {
                headers: {
                    "x-access-token": token,
                },
            };
            const url = `http://${host}/update/produto/${id}`;
            await axios.put(url, paramCorpo, config);

            navigate("/consultar");
            toast.info("Produto alterado Id: " + id);
        }
    }

    const Buscar = useCallback(
        async (token) => {
            const url = `http://${host}/select/produto/${id}?x-access-token=${token}`;
            let resp = await axios.get(url);

            setnome(resp.data.nome);
            setcategoria(resp.data.categoria);
            setImg(resp.data.img);
            setDescricao(resp.data.descricao);
            setValor(resp.data.valor);
            setDisponivel(resp.data.disponivel);
            setEstoque(resp.data.estoque);
        },
        [id]
    );

    useEffect(() => {
        let token = localStorage.getItem("USUARIO");
        setToken(token);

        if (token === "null") {
            Navigate("/");
        }

        if (id) {
            Buscar(token);
        }
    }, [id, Navigate, Buscar]);

    return (
        <div className="pagina-cadastrar">
            <header>
                <Cabe pesquisar={false} />
            </header>

            <main>
                <VoltarButton />
                <div className="titulo">
                    
                    {id && 
                    <h2>Cadastrar Produto: {id} </h2>
                    }
                    <hr />
                </div>

                <div className="formulario">
                    <div className="campos">
                        <div className="campo">
                            <h3>Nome do produto:</h3>
                            <input
                                type="text"
                                placeholder="Creme Hidratante 200ml"
                                onKeyUp={teclaApertada}
                                value={nome}
                                onChange={(e) => setnome(e.target.value)}
                            />
                        </div>

                        <div className="campo">
                            <h3>Valor:</h3>
                            <input
                                type="number"
                                placeholder="R$ 119.99"
                                onKeyUp={teclaApertada}
                                value={valor}
                                onChange={(e) => setValor(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="campos">
                        <div className="campo">
                            <h3>Categoria:</h3>
                            <select
                                className="categorias"
                                onChange={(e) => setcategoria(e.target.value)}
                                value={categoria}
                            >
                                <option value="Cabelos">Cabelos</option>
                                <option value="Maquiagem">Maquiagem</option>
                                <option value="Skin-care">Skin-care</option>
                                <option value="Perfumes">Perfumes</option>
                            </select>
                        </div>

                        <div className="campo">
                            <h3>Estoque:</h3>
                            <div className="contador">
                                <button onClick={diminuir}> - </button>
                                <input
                                    type="number"
                                    placeholder="100"
                                    onKeyUp={teclaApertada}
                                    value={estoque}
                                    onChange={(e) => setEstoque(e.target.value)}
                                />
                                <button onClick={aumentar}> + </button>
                            </div>
                        </div>
                    </div>

                    <div className="campos">
                        {/* <div className="campo">
                            <h3>Imagem:</h3>
                            <input
                                type="file"
                                accept="image/*"
                                onKeyUp={teclaApertada}
                                onChange={(e) => alterarImagem(e)}
                            />
                        </div> */}

                        <div className="campo">
                            <h3>Imagem:</h3>
                            <label for="file" className="custum-file-upload">
                                <div className="icon">
                                    {!img ? (
                                        <img
                                            src="/assets/images/icones/enviarArquivo.svg"
                                            alt=""
                                            width={80}
                                            id="SVGRepo_tracerCarrier"
                                        />
                                    ) : (
                                        <div className="imagem">
                                            <img
                                                id="inimigo"
                                                src={img}
                                                alt="Foto"
                                                width={200}
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="text">
                                    <span>Click to upload image</span>
                                </div>

                                <input
                                    id="file"
                                    type="file"
                                    onChange={(e) => alterarImagem(e)}
                                />
                            </label>
                        </div>

                        <div className="checkbox">
                            <h3>Disponivel:</h3>
                            <input
                                className="check"
                                type="checkbox"
                                checked={disponivel}
                                onChange={(e) =>
                                    setDisponivel(e.target.checked)
                                }
                            />
                        </div>
                    </div>

                    <div className="descricao">
                        <h3>Descricão:</h3>
                        <textarea
                            onKeyUp={teclaApertada}
                            placeholder="Creme Hidratante Corporal 200ml
                          Transforme o cuidado com a pele em um momento especial com este creme hidratante corporal de 200ml. Com uma textura leve e de rápida absorção, ele foi desenvolvido para todos os tipos de pele, proporcionando hidratação profunda e duradoura. Formulado com ingredientes naturais, como manteiga de karité e óleo de amêndoas, o creme ajuda a restaurar a barreira protetora da pele, deixando-a mais macia, suave e visivelmente saudável.
                          Ideal para uso diário, este hidratante possui uma fragrância suave e delicada, que deixa uma sensação refrescante sem ser invasiva. Além disso, seu tamanho prático é perfeito para ter sempre à mão, seja em casa ou na bolsa. Com o uso contínuo, a pele fica nutrida e com um brilho natural."
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </div>
                </div>

                <div className="lile">
                    <button className="inserir" onClick={salvar}>
                        {id === undefined ? "Inserir" : "Atualizar"}
                    </button>

                    <Link to={"/consultar"}>
                        <button className="cancelar"> Cancelar </button>
                    </Link>
                </div>
            </main>

            <footer>
                <Rodape />
            </footer>
        </div>
    );
}
