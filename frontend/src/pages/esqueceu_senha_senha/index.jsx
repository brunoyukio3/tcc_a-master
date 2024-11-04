import "./index.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Rodape from "../../components/rodape";
import Cabecalho_login from "../../components/cabecalho_login";

export default function Esqueceu_senha_senha() {
  const [senha, setSenha] = useState("");
  const [confirmarsenha, setConfirmarsenha] = useState("");

  const navigate = useNavigate();

  async function confirmar() {
    if (setSenha != senha) {
      alert("Código email valido");
      navigate("/esqueceu_senha_codigo");

      if (setSenha === setConfirmarsenha) {
        alert("Senha Alterada");
        navigate("/login");
      } else {
        alert("Erro");
      }
    }
  }

  return (
    <div className="senha">
      <Cabecalho_login />
      <div className="container">
        <div className="formulario">
          <div className="campos">
            <h1>RECUPERAÇÃO DE SENHA</h1>
            <div className="campo">
              <h4>Nova Senha</h4>
              <input
                type="text"
                placeholder="Digite sua Nova senha"
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <div className="campo">
              <h4>Confirmar Senha</h4>
              <input
                type="text"
                placeholder="Confirme a senha"
                onChange={(e) => setConfirmarsenha(e.target.value)}
              />
            </div>
            <hr className="linha" />
            <button onClick={confirmar}>Entrar</button>
          </div>
        </div>
      </div>
      <Rodape />
    </div>
  );
}
