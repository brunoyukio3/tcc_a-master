import { useEffect, useState, useCallback } from "react";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import Cabe from "../../components/cabecalho/index.jsx";
import Rodape from "../../components/rodape/index.jsx";
import MenuUsuario from "../../components/MenuUsuario/index.jsx";
import { MagicMotion } from "react-magic-motion";

import axios from "axios";

export default function Consultar() {
    const [produtos, setProdutos] = useState([]);
    const [token, setToken] = useState(null);
    const [limite, setLimite] = useState(5);

    const [mostrarVermais , setMostrarVermais] = useState(true);

    //4.172.207.208:5031
    const host = 'localhost:5031'

    const Navigate = useNavigate();

    const buscar = useCallback(async (token) => {
        const url = `http://${host}/select/produto/?total=${limite}&x-access-token=${token}`;
        let resp = await axios.get(url);
        setProdutos(resp.data);
    }, [limite]);

    async function deletar(id, token) {
        // Remova o parâmetro id
        const url = `http://${host}/delete/produto/${id}?x-access-token=${token}`; // Substitua o parâmetro id
        await axios.delete(url);

        await buscar(token);
    }

    async function sair() {
        localStorage.setItem("USUARIO", null);
        Navigate("/");
    }

    async function VerMais() {
        if (limite !== produtos.length) {
            setMostrarVermais(false)
        }

        let novoLimite = limite + 5;
        setLimite(novoLimite);

        await buscar(token);
    }

    function voltar() {
        Navigate('/')
    }

    useEffect(() => {
        let token = localStorage.getItem("USUARIO");
        setToken(token);

        if (token === "null") {
            Navigate("/");
        } else { 
            buscar(token);
        }
    }, [Navigate, limite, buscar]);

    return (
      
        <div className="pagina-consultar">
            <header className="cabecalho">
                <MenuUsuario />
                <Cabe />
            </header>

            <main>
                <div className="botao-voltar">
                    <div className="voltar" onClick={voltar} style={{ cursor: 'pointer' }}>
                        <img
                            src="/assets/images/Arrowleft.png"
                            alt="seta"
                            width={25}
                        />
                        <h1>VOLTAR</h1>
                    </div>
                </div>
                
                <div className="opcoes">
                    <button className="sair" onClick={sair}>
                        Sair
                    </button>

                    <div className="visualizar">
                        <button className="botao-card">
                            <img src="/assets/images/icones/consultarCard.svg" alt="botãoCard" width={30} height={30}/>
                        </button>

                        <button className="botao-list">
                            <img src="/assets/images/icones/consultarLista.svg" alt="botãoLista" width={30} height={30}/>
                        </button>
                    </div>


                    <div className="pesquisar-adicionar">
                        <input type="text" placeholder="Pesquisar item" />

                        <button className="adicionar">
                            <img src="/assets/images/icones/adicionarQuadrado.svg" alt="Sinal_Mais" width={30}/>
                            <Link to={"/cadastrar"}>Adicionar</Link>
                        </button>
                    </div>

                </div>



                <div className="tabela" style={{ overflow: "auto" }}>
                    <table>
                        <thead>
                            <tr className="bak">
                                <th>ID</th>
                                <th>nome</th>
                                <th>categoria</th>
                                <th>Descricao</th>
                                <th>Valor</th>
                                <th>Estoque</th>
                                <th>Disponivel</th>
                                <th>Alterar ou excluir</th>
                            </tr>
                        </thead>

                        <tbody>
                            {produtos.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        #{item.id.toString().padStart(2, "0")}
                                    </td>
                                    <td>{item.nome}</td>
                                    <td>{item.categoria}</td>
                                    <td>{item.descricao}</td>
                                    <td>{item.valor}</td>
                                    <td>{item.estoque}</td>
                                    {/* <td>{new Date(item.vinganca).toLocaleDateString()}</td> */}
                                    <td>{item.disponivel ? "Sim" : "Não"}</td>
                                    <td> 
                                        <MagicMotion>
                                        <Link to={`/cadastrar/${item.id}`}>
                                            <img
                                                src="/assets/images/editar.png"
                                                alt="icone_alterar"
                                                width={48}
                                            />
                                        </Link>
 
                                        <Link
                                            onClick={() =>
                                                deletar(item.id, token)
                                            }
                                        >
                                            <img
                                                src="/assets/images/Remover.svg"
                                                alt="icone_lixo"
                                                width={48}
                                            />
                                        </Link>
                                        </MagicMotion>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            {mostrarVermais &&
                <div className="verMais">
                    <hr />
                    <button onClick={VerMais}>Ver Mais</button>
                    <hr />
                </div>
            }
            </main>

            <footer>
                <Rodape />
            </footer>
        </div>
    );
}
