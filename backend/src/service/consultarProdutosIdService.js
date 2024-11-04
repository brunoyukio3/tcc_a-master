import { consultarProdutosid } from "../repository/produtosRepository.js";
import validarId from "../validation/validarId.js";

export default async function consultarProdutosIDService(id) {
    
    validarId(id)
     
    let produto = await consultarProdutosid(id)

    if  (produto == '') {

        throw new Error("Produto não encontrado");
    }

    return produto
}