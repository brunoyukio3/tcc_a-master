import { consultarProdutosNome } from "../repository/produtosRepository.js";


export default async function consultarProdutosNomeService(buscar) {
    //Quando vazio deve retornar todos os registros
    //Não deve ter validação

    let registros = await consultarProdutosNome(buscar)

    return registros
}