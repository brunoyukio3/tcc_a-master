import * as db from "../repository/usuarioRepository.js";
import { gerarToken } from "../utils/jwt.js";

import { Router } from "express";
const endpoints = Router();

endpoints.post("/entrar/", async (req, resp) => {
    try {
        let pessoa = req.body;

        let usuario = await db.validarUsuario(pessoa);

        if (usuario == null) {
            resp.send({ erro: "Usuário ou senha incorreto(s)" });
        } else {
            let token = gerarToken(usuario);
            resp.send({
                token: token,
            });
        }
    } catch (err) {
        resp.status(400).send({
            erro: err.message,
        });
    }
});

export default endpoints;
