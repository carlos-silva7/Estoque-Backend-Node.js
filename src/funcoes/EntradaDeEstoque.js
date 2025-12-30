
export function EntradaDadosENTRADAEstoque() {

   const itemEscolhido_Entrada= VerificarTexto(prompt("Digite o nome do item"),"Nome do Item");
    if(itemEscolhido_Entrada.sucesso == false)  return {sucesso:false,mensagem: itemEscolhido_Entrada.mensagem}
    
    const qtd_entrada = ValidarNumero(prompt("Quantidade de entrada:"),"Quantidade de entrada");
        if(qtd_entrada.sucesso == false)  return {sucesso:false,mensagem: qtd_entrada.mensagem}
            
        const JustificativaEntrada = VerificarTexto(prompt("justifique a entrada:"),"Justificativa");
        if(JustificativaEntrada.sucesso == false)  return {sucesso:false,mensagem: JustificativaEntrada.mensagem}

        return{
            sucesso:true,
            resultadoItemEntrada:itemEscolhido_Entrada.resultado,
            resultadoQuantidadeEntrada: qtd_entrada.resultado,
            resultadoJustificativaEntrada: JustificativaEntrada.resultado
        }


}


export function entradaEstoque() {
   
  if (!verificarPermissao("entradaEstoque")) throw new Error("Acesso negado!")
  
    const dados = EntradaDadosENTRADAEstoque()
    if(dados.sucesso == false) {return dados.mensagem}


    const buscarMaterial = LocalizarMaterial(produtos,dados.resultadoItemEntrada)
    if(buscarMaterial.sucesso == false) {return buscarMaterial.mensagem}

    const resultadoEntrada = ProcessamentoDeEntrada(buscarMaterial.encontrado,dados.resultadoQuantidadeEntrada)
    if(resultadoEntrada.sucesso == false) {return resultadoEntrada.mensagem}

    RegistrarHistorico(historico,buscarMaterial.encontrado,dados.resultadoQuantidadeEntrada,dados.resultadoJustificativaEntrada,resultadoEntrada.resultado,"entrada")


   return{mensagem:"OPERAÇÃO REALIZADA COM SUCESSO!",
      Tipo_de_Movimentacao:"entrada",
      material: buscarMaterial.encontrado,
      quantidadeEntrada: dados.resultadoQuantidadeEntrada,
      SaldoAtualizado: resultadoEntrada.resultado,
      Justificativa: dados.resultadoJustificativaEntrada

}       
        
     }


     export function ProcessamentoDeEntrada(item,quantidade) {

                if(quantidade <= 0) return {
                    sucesso:false,
                    mensagem:"Quantidade invalida"}
                
                    else{ item.quantidade +=  quantidade}
                    
                    
                
                return {sucesso: true,resultado:item.quantidade}
             
        
        


}
   