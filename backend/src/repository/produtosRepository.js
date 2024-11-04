import con from './connection.js'

export async function consultarProdutosLimite(total) {
    let comando = `
    SELECT  id_produto id,  
            nome,
            categoria,
            img,
            descricao,
            valor,
            disponivel,
            estoque
    FROM produtos
    LIMIT ?
    `

    let resposta = await con.query(comando, [Number(total)]);
    let registros = resposta[0]

    return registros;
}

export async function consultarProdutosid(id) {
    let comando = `
    SELECT id_produto   id,  
                        nome,
                        categoria,
                        img,
                        descricao,
                        valor,
                        disponivel,
                        estoque
    FROM produtos
        WHERE id_produto = ?;
    `

    let resposta = await con.query(comando, [id]);
    let registros = resposta[0]

    return registros;
}

export async function consultarProdutosNome(info) {
    let comando = `
    select id_produto   id,  
            nome,
            categoria,
            img,
            descricao,
            valor,
            disponivel,
            estoque
    from produtos
    where nome like ? or categoria like ?;
    `

    let resposta = await con.query(comando, ['%' + info + '%', '%' + info + '%']);

    let registros = resposta[0]

    return registros;
}

export async function inserirProdutos(produto, caminhoImagem, id) {
    let comando = `
    INSERT INTO produtos (nome, categoria, img, descricao, valor, disponivel, estoque, id_autonomo) VALUES
    (?, ?, ?, ?, ?, ?, ?, ?)
    `

    let resposta = await con.query(comando, [produto.nome ,produto.categoria, caminhoImagem, produto.descricao, produto.valor, produto.disponivel, produto.estoque, id]);
    let info = resposta[0]

    return info.insertId;
}

export async function alterarProdutos(produto, id) {
    let comando = `
    UPDATE produtos
    SET 
        nome = ?,
        categoria = ?,
        img = ?,
        descricao = ?, 
        valor = ?, 
        disponivel = ?,
        estoque = ? 
    WHERE id_produto = ?
    `

    let resposta = await con.query(comando, [produto.nome, produto.categoria, produto.img, produto.descricao, produto.valor, produto.disponivel, produto.estoque, id]);
    let info = resposta[0]

    return info.affectedRows;
}

export async function alterarImagem(id, caminhoImagem) {
    let comando = `
        UPDATE produtos
        SET img = ?
        WHERE id_produto = ?
    `

    let resposta = await con.query(comando, [caminhoImagem, id])

    let info = resposta[0]

    return info.affectedRows
}

export async function deletarProduto(id) {
    let comando = `
        delete from produtos
        where id_produto = ?
    `

    let resposta = await con.query(comando, [id]);

    let info = resposta[0]

    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;
}


export async function consultarProdutosPorPreco(precoMax) {
    let comando = `
    select id_produto   id,  
            nome,
            categoria,
            img,
            descricao,
            valor,
            disponivel,
            estoque
    from produtos
    WHERE valor <= ?;
    `;

    let resposta = await con.query(comando, [precoMax]);
    let registros = resposta[0];

    return registros;
}

export async function consultarTodos(total) {
    let comando = `
    select id_produto   id,  
            nome,
            categoria,
            img,
            descricao,
            valor,
            disponivel,
            estoque
    from produtos`;

    let resposta = await con.query(comando, [total]);
    let registros = resposta[0];

    return registros;
}