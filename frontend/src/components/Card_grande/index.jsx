import './index.scss';

import { Link } from "react-router-dom"
import { useState } from 'react';

export default function CardGrande(props) {
    return (

        <div className='cardG'>
            <div className='divimg'>
                <img className='img' width={400} src={props.imagem} alt={props.alt} />
            </div>

            <div className='divnome'>

                <div>
                    <h3 className='nome'>{props.nome}</h3>
                </div>

                <div>
                    <h3 className='preco'>{props.preco}</h3>
                </div>

                <div>
                    <h2>Categoria</h2>
                    <h3 className='categoria'>{props.categoria}</h3>
                </div>

                <div>
                    <h3 className='numero'>{props.numero}</h3>
                </div>

            </div>

            <div>
                <h3 className='estoque'>estoque</h3>
            </div>


            <div className='descricao'>
                <hr />
                <p>{props.descricao}</p>
                <hr />
            </div>




        </div>

    )
}
