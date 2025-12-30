// função baixo estoque


export function estoqueBaixo(lista){
    

const filtragemEstoqueBaixo = lista.find((element) => element.quantidade< element.estoqueMinimo);


return{mensagem: "PRODUTOS COM QUANTIDADE ABAIXO DO ESTOQUE DO MINIMO!",
        resultado:filtragemEstoqueBaixo
}

}


//Produto Mais Usado
           
export function produtoMaisUsado(historico){

                

    if (!verificarPermissao("produtoMaisUsado"))  return{mensagem:"Acesso negado!", motivo:"Sem permissão para realizar a ação!"}
                
    if(historico.length === 0)return{sucesso:false,mensagem:"Não possui Historico até o momento!"}
            
     let contador = {}

  for(const item of historico)  
    {let nome = item.nome					// 1° for = cria variavel i para percorrer historico com for
    let qtd = item.quantidade;									                    //cria variavel nome e qtd para ganhar o valor do historico
  
    if(contador[nome] == null){										                        // nome = nome do produto e contador[nome] = quantidade
      contador[nome] = 0;											                            // verifica se tem o valor no objeto se não cria
      }
      contador[nome]+=qtd
  }

     let maior=0
            
     let nomeItemMaismovimentado = ""

              

      for(let chave in contador){if(contador[chave]>maior){maior= contador[chave]		        // 2° for = declara chave e ganha o nome do produto como valor(contador)
        nomeItemMaismovimentado = chave}									                    //contador[chave] = quantidade ------> maior
      }												                                    //chave = nome do produto -----> itemMaismovimentado
            
      return{sucesso: true,
       mensagemitem:"O Produto mais usado é: ", itemMaismovimentado: nomeItemMaismovimentado,
       mensagemMovimentacao:"Total Movimentado é:", numeroDeMovimentacao: maior
            
    }     
}

  