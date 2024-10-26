const fs =  require("fs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;

app.get("/",(req,res)=>{
     

});
//app.use(bodyParser.json());
app.use(express.json());
app.post("/novo",(req,res)=>{
     console.log(req.body);
     res.send(req.body)
});


app.listen(port,()=>{
    console.log("servidor online");
});

/*
const dados = [];

const dado = {
    "{\"ativo\": \"ativo\",\"lotes\": \"lotes\",\"data\": \"data\",\"saldoinit\": \"saldoinit\",\"lucro\": \"lucro\"}": "",
    "id": 2
}
for(let el in dado){
    if(el != "id"){
        dados.push(JSON.parse(el))
    }
}

*/

