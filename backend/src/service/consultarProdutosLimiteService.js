import { consultarProdutosLimite } from "../repository/produtosRepository.js";

export default async function consultarProdutosLimiteService(total) {
    
    let produto = await consultarProdutosLimite(total)

    if  (produto == '') {
        throw new Error("Produto não encontrado");
    }

    return produto
}