import {inserirProdutos} from '../repository/produtosRepository.js';

import validarId from '../validation/validarId.js';
import validarProduto from '../validation/validarProduto.js';

export default async function inserirProdutoService(produto, caminhoImagem, id) {
    //validação
    validarId(id)
    validarProduto(produto, caminhoImagem)
    
    let resposta = await inserirProdutos(produto, caminhoImagem, id)

    return resposta
}