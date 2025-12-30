import http from 'http'


const PORT = 3001

const rotas ={

    "/":"Inicio",
    "/entrada-estoque": "ENTRADA DE PRODUTO",
    "/saida-estoque":"RETIRADA DE PRODUTO",
    "/mostrar-estoque" : "ESTOQUE OFICINA",
    "/historico-estoque" : "HISTORICO",
    "/produtos-com-estoquebaixo": "PRODUTOS COM ESTOQUE ABAIXO",
    "/produto-maisconsumido": "PRODUTO COM CONSUMO ALTO",
    "/edicao-produto" : "EDIÇÃO DE PRODUTO",
    "/criacao-usuario" : "CRIAÇÃO DE USUARIO",
    "/usuarios-bloqueados": "USUARIOS BLOQUEADOS",
    "/bloqueio-usuario" :   "BLOQUEIO DE USUARIO",
    "/desbloqueio-usuario" : "DESBLOQUEIO DE USUARIO"    

}


const server = http.createServer((req,res)=>{

    res.writeHead(200,{"content-type":"application/json"});
    res.end(rotas[req.url])
});


server.listen(PORT,()=>{

console.log("Servidor Rodando!")


})
