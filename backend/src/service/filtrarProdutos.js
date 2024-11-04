import {consultarProdutosPorPreco } from "../repository/produtosRepository.js";


export default async function consultarProdutospreco(precoMax) {
    //Quando vazio deve retornar todos os registros
    //Não deve ter validação

    let registros = await consultarProdutosPorPreco(precoMax)

    return registros
}