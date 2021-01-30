const express = require('express'),
    server = express(),
    cors = require('cors'),
    mysql = require('mysql');

const database = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "fseletro"
})

server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.end("<html>OLA MUNDO</html>")
})

server.get('/produto', (req, res) => {
    const sql = "SELECT * FROM produto";
    database.query(sql, (error, results) => {
        if(error) {
            return error;
        } res.json(results)
    })  
})

server.get('/pedidos', (req, res) => {
    const sql = "SELECT * FROM pedidos";
    database.query(sql, (error, results) => {
        if(error) {
            return error;
        } res.json(results)
    })  
})

server.post('/pedidos', (req, res) =>{
    const { nomeCliente, endereco,telefone,nomeProduto,valorUnitario,quantidade,valorTotal} = req.body
    const sql = `INSERT INTO usuarios(nomeCliente,endereco,telefone,nomeProduto, valorUnitario,quantidade, valorTotal) VALUES ('${nomeCliente}', '${endereco}','${telefone}','${nomeProduto}','${valorUnitario}','${qunatidade}','${valorTotal}')`;
    database.query(sql, (error, results) =>{
        if(error){
            return error;
        } res.json(results);
    })
})


server.get('/usuarios', (req, res) => {
    const sql = "SELECT * FROM usuarios";
    database.query(sql, (error, results) => {
        if(error) {
            return error;
        } res.json(results)
    })  
})

server.post('/usuarios', (req, res) =>{
    const { nome, mensagem } = req.body
    const sql = `INSERT INTO usuarios(nome, mensagem) VALUES ('${nome}', '${mensagem}')`;
    database.query(sql, (error, results) =>{
        if(error){
            return error;
        } res.json(results);
    })
})

server.listen(4000, ()=>{
    console.log("Server ativo")
})