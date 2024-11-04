import * as db from "../repository/produtosRepository.js";

import { autenticar } from "../utils/jwt.js";

import { storage } from "./multerConfig.js";
import multer from 'multer'
import fs from 'fs'

import { Router } from "express";
import consultarProdutosLimiteService from "../service/consultarProdutosLimiteService.js";
import consultarProdutosIDService from "../service/consultarProdutosIdService.js";
import consultarProdutosNomeService from "../service/consultarProdutosNomeService.js";
import inserirProdutoService from "../service/inserirProdutoService.js";
import alterarImagemService from "../service/alterarImagemService.js";
import alterarProdutoService from "../service/alterarProdutoService.js";
import removerProdutoService from "../service/RemoverProdutoService.js";

const endpoints = Router();

//seleciona os produtos com um total de limite
endpoints.get("/select/produto", async (req, resp) => {
    try {
        //Recebe o limite de registros
        let limite = req.query.total
    
        let produto = await consultarProdutosLimiteService(limite);

        resp.send(produto);
    } catch (error) {
        resp.send({
            Error: error.message
        });
    }
});

//Seleciona um id especifico
endpoints.get("/select/produto/:id", async (req, resp) => {
    try {
        let id = req.params.id;
        let produto = await consultarProdutosIDService(id);

        resp.send(produto[0]);
    } catch (error) {
        resp.send({
            Error: error.message
        });
    }
});

endpoints.get("/select/todosproduto", async (req, resp) => {
    try {
        let total= req.body
        let produto = await db.consultarTodos(total);

        resp.send(produto[0]);
    } catch (error) {
        resp.send({
            Error: error.message
        });
    }
});

//Busca produtos por nome ou pela descrição
endpoints.get("/produto/nome", async (req, resp) => {
    try {
        let buscar = req.query.buscar;
    
        let produtos = await consultarProdutosNomeService(buscar)
        
        resp.send(produtos);
    } catch (err) {
        resp.send({
            Error: err.message,
        });
    }
});

let inserirImagem = multer({storage: storage})
endpoints.post("/insert/produto", autenticar, inserirImagem.single('produto'), async (req, resp) => {
    try {
        let id = req.user.id;
        
        let produto = null
        let caminhoImagem = null


        if (!req.body.info){
            //BODY
            produto = req.body
            caminhoImagem = produto.img 
        
        } else {
            //FORM-DATA
            produto = JSON.parse(req.body.info)
            
            //verifica se algum arquivo foi enviado
            if (req.file && req.file.path) {
                caminhoImagem = req.file.path;

                //salva o arquivo em base64
                const base64 = fs.readFileSync(caminhoImagem, {encoding: 'base64'});
                let extensao = req.file.mimetype
                caminhoImagem = `data: ${extensao};base64,${base64}`

            } else {
                console.log('Nenhum arquivo foi enviado.');
                caminhoImagem = produto.img
            }
        }

        let resposta = await inserirProdutoService(produto, caminhoImagem, id)

        resp.send({
            id: resposta
        });

    } catch (error) {
        resp.send({
            Error: error.message,
        });
    }
});

//Atualizar imagem
let atualizarImagemProduto = multer({storage: storage})
endpoints.put("/update/imagem/:id", autenticar, atualizarImagemProduto.single('produto'), async (req, resp) => {
        try {
            let id = req.params.id;

            let caminhoImagem = req.file.path
            let extensao = req.file.mimetype // png, jpeg ...

            const contents = fs.readFileSync(caminhoImagem, {encoding: 'base64'});

            let base64 = `data: ${extensao};base64,${contents}`

            let resposta = await alterarImagemService(id, base64)

            resp.send(caminhoImagem);

        } catch (error) {
            resp.send({
                Error: error.message
            })
        }
    }
)

//Altera um produto
endpoints.put("/update/produto/:id", autenticar, async (req, resp) => {
    try {
        let idProduto = req.params.id;
        let produto = req.body;

        let resposta = await alterarProdutoService(produto, idProduto)

        resp.send({
            linhasAfetadas: resposta
        });
    } catch (error) {
        resp.send({
            Error: error.message,
        });
    }
});

//Remove um produto
endpoints.delete("/delete/produto/:id", autenticar, async (req, resp) => {
    try {
        let id = req.params.id;

        let resposta = await removerProdutoService(id)

        resp.send({
            linhasAfetadas: resposta,
        });
    } catch (error) {
        resp.send({
            Error: error.message,
        });
    }
});


endpoints.post("/produto/preco/", async (req, resp) => {
    try {
        const { precoMax } = req.body; 

        // Verifica se o preço máximo foi fornecido
        if (!precoMax) {
            return resp.status(400).send({
                Error: "O parâmetro precoMax é obrigatório."
            });
        }

        // Chama o método no repositório que busca produtos com preço até o limite
        let produtos = await db.consultarProdutosPorPreco(precoMax);
        
        resp.send(produtos);
    } catch (error) {
        resp.send({
            Error: error.message
        });
    }
});


export default endpoints;
