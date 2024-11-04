import "./index.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Rodape from "../../components/rodape";
import Cabecalho_login from "../../components/cabecalho_login";

export default function Esqueceu_senha_codigo() {
  const [codigo, setCodigo] = useState("");
  const navigate = useNavigate();

  async function confirmar() {
    if (setCodigo === codigo) {
      alert("Código de confirmação válido");
      navigate("/esqueceu_senha_senha");
    }
  }

  return (
    <div className="codigo">
      <Cabecalho_login />
      <div className="container">
        <div className="formulario">
          <div className="campo">
            <h1>RECUPERAÇÃO DE SENHA</h1>
            <p>Insira o código que foi enviado para seu e-mail</p>
            <input
              type="text"
              placeholder="Digite o código"
              onChange={(e) => setCodigo(e.target.value)}
            />
            <button onClick={confirmar}>Confirmar código</button>
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
}
