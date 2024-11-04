import { alterarImagem } from "../repository/produtosRepository.js";

import validarId from "../validation/validarId.js";

export default async function alterarImagemService(id, caminhoImagem) {
    
    validarId(id)

    let linhasAfetadas = await alterarImagem(id, caminhoImagem)

    if(linhasAfetadas === 0 ) {
        throw new Error("Produto não encontrado")
    }

    return linhasAfetadas
}