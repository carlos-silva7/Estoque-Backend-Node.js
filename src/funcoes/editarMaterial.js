// editar prod
import { ValidarNumero,VerificarTexto } from "./VerificacaoGlobal.js";
import { verificarPermissao } from "../usuarios.js";



export function editarProduto(produtos){



if (!verificarPermissao("editarProduto")) return {sucesso:false,mensagem:"Sem permissão para realizar a ação!"}


let nome_editar = VerificarTexto(prompt("Digite o nome do produto a ser editado:"),"Nome do produto");
if(nome_editar.sucesso == false) return{sucesso:false,mensagem:nome_editar.mensagem}

  let indice = -1

for(let i = 0;i<produtos.length;i++){
  if( nome_editar.resultado == produtos[i].nome){
      indice = i; break;}}
      
      if(indice == -1) return{sucesso:false,mensagem:"Produto não encontrado!"}
        


          let escolha = ValidarNumero(prompt(`Qual campo deseja editar?
1- Nome
2- Categoria
3- Unidade
4- Estoque Mínimo
5- Quantidade em Estoque
6- Sair
Digite o número correspondente:`),"Escolha");

if(escolha.sucesso == false) return{sucesso:false, mensagem:escolha.mensagem}

if(escolha.resultado==6)return{sucesso:false,mensagem:"Edição finalizada!"}

    switch (escolha.resultado) {
        case 1:
            let novoNome = VerificarTexto(prompt("Digite o novo nome do produto:"),"Nome do produto");
            if(novoNome.sucesso == false)return{sucesso:false,mensagem:novoNome.mensagem}
  
            produtos[indice].nome = novoNome.resultado;

            return{sucesso:true,
                    mensagem:"Nome atualizado com sucesso!",
                    dadosNovos:produtos[indice].nome}
        
      
           


        case 2: let novaCategoria = VerificarTexto(prompt("Digite a nova categoria do produto:"),"Categoria do produto");
                if(novaCategoria.sucesso == false) return{sucesso:false, mensagem:novaCategoria.mensagem}
                
                produtos[indice].categoria = novaCategoria.resultado;

                return{sucesso:true,
                      mensagem:"Categoria atualizada com sucesso!",
                      dadosNovos: produtos[indice].categoria}
              
            
                


         case 3: let novaUnidade = VerificarTexto(prompt("Digite a nova unidade do produto:"),"Unidade do produto");
                  if(novaUnidade.sucesso == false) return{sucesso:false,mensagem:novaUnidade.mensagem}

                produtos[indice].unidade = novaUnidade.resultado;

                return{sucesso:true,
                      mensagem:"Unidade atualizada com sucesso!",
                      dadosNovos:produtos[indice].unidade}
                
             
            

        case 4: let novoEstoqueMinimo = ValidarNumero(prompt("Digite o novo estoque mínimo do produto:"),"Estoque minimo");
                  if(novoEstoqueMinimo.sucesso == false) return{sucesso:false,mensagem:novoEstoqueMinimo.mensagem}
              
                produtos[indice].estoqueMinimo = novoEstoqueMinimo.resultado;

                return{sucesso:true,
                  mensagem:"Estoque Mínimo atualizado com sucesso!",
                  dadosNovos:produtos[indice].estoqueMinimo}
                
              
              


                case 5: let novaQuantidade = ValidarNumero(prompt("Digite a nova quantidade em estoque do produto:"),"Quantidade");
                if(novaQuantidade.sucesso == false) return{sucesso: false,mensagem:novaQuantidade.mensagem}
  
                produtos[indice].quantidade = novaQuantidade.resultado;

                return{sucesso:true,
                  mensagem:"Quantidade em Estoque atualizada com sucesso!",
                  dadosNovos:produtos[indice].quantidade}

              
                }
                
    }

  
 


