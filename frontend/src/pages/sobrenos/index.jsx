import Cabe from "../../components/cabecalho";
import Rodape from "../../components/rodape";

import MenuUsuario from "../../components/MenuUsuario";

import "./index.scss";
import VoltarButton from "../../components/voltar";

export default function Sobre() {

    return (
        <div className="pagina-SobreNos">
            <div className="sobre">
                <header>
                    <MenuUsuario />
                    <Cabe />
                </header>
                <VoltarButton/>
                <div className="faleConosco">
                    <button className="butao">Fale Conosco</button>
                </div>

                <div className="nossaMissao">
                    <h2>Nossa Missão</h2>
                    <p>
                        Acreditamos que cada pessoa é única e merece produtos
                        que se alinhem com sua individualidade e valores. Por
                        isso, trabalhamos para oferecer soluções eficazes que
                        promovam sua beleza natural e promovem a autoaceitação.
                    </p>
                </div>

                <div className="comentarios">
                    <h2>Comentarios</h2>

                    <div className="comments-txt">
                        <img
                            className="seta"
                            src="assets/images/seta.esq.png"
                            alt="seta"
                        />
                        <p>
							Este produto de cosmético é incrível! A qualidade
							é evidente desde a primeira aplicação - textura leve, fragrância suave e 
							resultados que realmente entregam o que prometem. É perfeito para quem busca 
							cuidados com a pele sem abrir mão de um toque de luxo.
                        </p>
                        <img
                            className="seta"
                            src="assets/images/seta.direita.png"
                            alt=""
                        />
                    </div>
                </div>

                <div className="recado">
                    <p>
                        Nossos cosméticos são formulados com ingredientes de
                        alta qualidade, combinando inovação e respeito pelo meio
                        ambiente. Junte-se a nós e descubra como a Ashey pode
                        transformar sua rotina de cuidados pessoais.
                    </p>
                </div>

                <hr />

                <div className="creditos">
                    <p>
                        Com carinho, <br />
                        Equipe Ashey
                    </p>
                </div>
            </div>

            <div className="tiny">
                <img src="assets/images/tiny.png" alt="tiny" />
            </div>

            <footer>
                <Rodape />
            </footer>
        </div>
    );
}
