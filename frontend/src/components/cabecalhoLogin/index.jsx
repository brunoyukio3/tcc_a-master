import "./index.scss";
import React from "react";
import { useNavigate } from "react-router-dom";


export default function CabecalhoLogin() {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-1); // Volta para a página anterior
  };

  return (
    <div className="container">
      <div className="botao-voltar">
        <div
          className="voltar"
          onClick={handleVoltar}
          style={{ cursor: "pointer" }}
        >
          <img src="/assets/images/Arrowleft.png" alt="seta" width={25} />
          <h1>VOLTAR</h1>
        </div>
      </div>

      <div className="logo">
        <img src="/assets/images/logo/ashey-logo.svg" alt="Logo" width={400} />
      </div>
    </div>
  );
}
