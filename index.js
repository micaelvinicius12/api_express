const express = require("express");
const fs = require("fs");
const app = express();
let dados = [];
const port = process.env.PORT || 8080;

app.get("/delete",(req,res) => {
    deletaDados();
    res.send("DADOS APAGADOS");
});
app.get("/dados",(req,res) => {
    res.send(lerArquivos());
});
app.get("/:nome/:idade/:endereco",(req,res) => {
    escreveDados(req.params.nome,req.params.idade,req.params.endereco);
res.send("OS DADOS FORAM SALVOS !");});
app.post("/dados/d",(req,res) => {
    console.log(req.body);
    res.send(String(req.body));
});

app.listen(port,()=>{
    console.log("servidor online");
})

function escreveDados(nome,idade,endereco){
let dadosJoson = fs.readFileSync("./db.json",{encoding: 'utf-8'});
let dadosrecebidos = JSON.parse(dadosJoson);
dados = dadosrecebidos;
let dado = {nome,idade,endereco};
dados.push(dado);
fs.writeFileSync("./db.json",JSON.stringify(dados),{encoding: 'utf-8'});
}

function lerArquivos(){
   let dadosJoson = fs.readFileSync("./db.json",{encoding: 'utf-8'});
   let dadosrecebidos = JSON.parse(dadosJoson);
   return dadosrecebidos;
}
function deletaDados(){
    const zerandoDados = [];
    fs.writeFileSync("./db.json",JSON.stringify(zerandoDados),{encoding: 'utf-8'});
}

