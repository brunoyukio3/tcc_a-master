import React, { useState } from 'react';
import './index.scss'
export default function FiltroPreco({ onChange }) {
  const [precoMax, setPrecoMax] = useState(1000);

  const handleSliderChange = (e) => {
    const value = e.target.value;
    setPrecoMax(value);
    onChange(value); // Atualiza o preço máximo no componente pai
  };

  return (
    <div className="filtro_preco">
      <div className="precinho">
        <p>Preço</p>    
        <p>R$20 - {precoMax}</p>
      </div>
      <hr />
      <input
        type="range"
        min="0"
        max="1000"
        value={precoMax}
        onChange={handleSliderChange}
        style={{ width: '100%', marginTop: '10px' }}
      />
    </div>
  );
}
