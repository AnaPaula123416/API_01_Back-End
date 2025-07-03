import express from 'express';
import fatosService from './service/fatosService.js';

const app = express();
app.use(express.json());

app.get('/fatos/:ano', async (req, res) => {
const ano = req.params.ano;
if (!fatosService.validarAno(ano)) {
    res.status(400).json({ mensagem: 'Ano inválido ou fora da faixa permitida' });
} else {
    const fato = await fatosService.buscarFato(ano);
    res.json({ fato });
}
});

app.listen(8080, () => {
console.log("Servidor iniciado na porta 8080");
});