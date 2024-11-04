import { alterarProdutos } from "../repository/produtosRepository.js";
import validarId from "../validation/validarId.js";
import validarProduto from "../validation/validarProduto.js";

export default async function alterarProdutoService(produto, idProduto) {
    validarId(idProduto)    
    validarProduto(produto)

    let resposta = await alterarProdutos(produto, idProduto)

    if (resposta === 0) {
        throw new Error("Produto não encontrado");
    }

    return resposta
}