// remover produto

export function removerProduto(){

try{
if (!verificarPermissao("removerProduto")) return;

let nome_remover = VerificarTexto(prompt("Digite o nome do produto a ser removido:"),"Nome do produto");

let indice = -1

for(let i = 0;i<produtos.length;i++){

if(produtos[i].nome == nome_remover){
  indice = i;
  break;}

}

if(indice == -1) throw new Error("Produto não encontrado!")


let pergunta= VerificarTexto(prompt(`Tem certeza que deseja remover o produto? (sim/não)`),"Confirmação de remoção");

if(pergunta == "não" ||pergunta == "nao" || pergunta == "n"){
  throw new Error("Operação cancelada!");}


  if(pergunta=="sim" || pergunta=="s"){
    produtos.splice(indice,1);
     console.log("---------------------------------------------------");
    console.log("Produto removido com sucesso!");
    console.log("Nome do Produto removido: ", nome_remover);
    console.log("Tipo de operação: Remoção de Produto");
    console.log("Data e Hora da operação: ", new Date());
    console.log("---------------------------------------------------");
  }

} catch(erro) {console.log(chalk.red(`ERROR:${erro.message}`))}

}
