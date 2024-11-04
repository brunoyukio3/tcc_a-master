import produtosController from './controller/produtosController.js'
import usuarioController from './controller/usuarioController.js'

import express from 'express'

export default function adicionarRotas (servidor) {
    servidor.use(produtosController);
    servidor.use(usuarioController);

    //libera as imagens
    servidor.use('/storage/produtos', express.static('./storage/produtos'))
}

