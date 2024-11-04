import { deletarProduto } from "../repository/produtosRepository.js";
import validarId from "../validation/validarId.js";

export default async function removerProdutoService(id) {
    //validação
    validarId(id)

    let resposta = await deletarProduto(id)

    if (resposta === 0) {
        throw new Error("Produto não Encontrado");
    }

    return resposta
}
