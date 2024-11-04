import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss'

export default function VoltarButton() {
    const navigate = useNavigate();

    const handleVoltar = () => {
        navigate(-1); // Volta para a página anterior
    };

    return (
        <div className="botao-voltar">
            <div className="voltar" onClick={handleVoltar} style={{ cursor: 'pointer' }}>
                <img
                    src="/assets/images/Arrowleft.png"
                    alt="seta"
                    width={25}
                />
                <h1>VOLTAR</h1>
            </div>
        </div>
    );
}
