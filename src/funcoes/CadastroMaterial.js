// Cadastrar produto novo

export function EntradaDadosCADASTROPRODUTO(lista){



const nome = VerificarTexto(prompt("Qual nome do produto a ser cadastrado:"),"Nome do produto")
if(nome.sucesso == false) return{sucesso:false,mensagem:nome.mensagem}
    

for(let i = 0;i<lista.length;i++){
  
  if(lista[i].nome.toLowerCase() == nome.resultado.toLowerCase()) return{sucesso:false,mensagem:"Produto já contém cadastro!"}}


    const categoria = VerificarTexto(prompt("Categoria do Produto:"),"Categoria do Produto");
    if(categoria.sucesso == false) return{sucesso:false, mensagem:categoria.mensagem}

        const unidade = VerificarTexto(prompt("Unidade do produto:"),"Unidade do produto");
        if(unidade.sucesso == false) return{sucesso: false, mensagem: unidade.mensagem}

        const quantidade = ValidarNumero(prompt("Quantidade inicial do estoque:"),"Quantidade inicial");
            if(quantidade.sucesso == false) return{sucesso:false,mensagem: quantidade.mensagem}    
        
        
        const estoqueMinimo = ValidarNumero(prompt("Quantidade do estoque mínimo:"),"Estoque mínimo");
             if(estoqueMinimo.sucesso == false) return {sucesso:false, mensagem: estoqueMinimo.mensagem}



    return{ sucesso:true,
            resultadoNome: nome.resultado,
            resultadoCategoria:categoria.resultado,
            resultadoUnidade:unidade.resultado,
            resultadoEstoqueMinimo: estoqueMinimo.resultado,
            resultadoQuantidade: quantidade.resultado,
            
    }           


}



export function cadastrarProduto(produtos){



  if (!verificarPermissao("cadastrarProduto")) return{mensagem:"Acesso negado!", motivo:"Sem permissão para realizar a ação!"}

const dados = EntradaDadosCADASTROPRODUTO(lista)
if(dados.sucesso == false) return{sucesso:false, mensagem: dados.mensagem}

const ativo = true  

const adicionar_Produto = {
  nome:dados.resultadoNome,
  quantidade:dados.resultadoQuantidade,
  categoria:dados.resultadoCategoria,
  estoqueMinimo:dados.resultadoEstoqueMinimo,
  unidade:dados.resultadoUnidade,
  ativo:ativo

}

produtos.push(adicionar_Produto);

return{sucesso: true,
  mensagem:"CADASTRO REALIZADO COM SUCESSO!",
  ProdutoCadastrado: adicionar_Produto.nome

}

}
  