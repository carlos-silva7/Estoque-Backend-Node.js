export function EntradaDadosSAIDAEstoque() {

    const itemEscolhido= VerificarTexto(prompt("Digite o nome do item"),"Nome do item");
    if(itemEscolhido.sucesso == false) return {sucesso:false, mensagem:itemEscolhido.mensagem}
    
        const quantidadeRetirada = ValidarNumero(prompt("Quantidade de retirada:"),"Quantidade de retirada");
        if(quantidadeRetirada.sucesso == false) return {sucesso:false,mensagem:quantidadeRetirada.mensagem}
            
        const Justificativa = VerificarTexto(prompt("Digite sua justificativa"),"Justificativa");
        if(Justificativa.sucesso == false)  return {sucesso:false,mensagem: Justificativa.mensagem}

        return{
            sucesso:true,
            resultadoItem:itemEscolhido.resultado,
            resultadoQuantidadeRetirada: quantidadeRetirada.resultado,
            resultadoJustificativa: Justificativa.resultado
        }


}

export function saidaEstoque() {

    if (!verificarPermissao("saidaEstoque")) 
        
   return  {mensagem:"Acesso negado!", motivo:"Sem permissão para realizar a ação!"}

  const dados = EntradaDadosSAIDAEstoque()
  if(dados.sucesso == false) {return dados.mensagem}


  const buscaMaterial = LocalizarMaterial(produtos,dados.resultadoItem)
  if(buscaMaterial.sucesso == false){return buscaMaterial.mensagem}
    

  const resultadoSaida = ProcessamentoDeSaida(buscaMaterial.encontrado,dados.resultadoQuantidadeRetirada)
  
   RegistrarHistorico(historico,buscaMaterial.encontrado,dados.resultadoQuantidadeRetirada,dados.resultadoJustificativa,resultadoSaida.resultado,"saida")

return{mensagem:"OPERAÇÃO REALIZADA COM SUCESSO!",
      Tipo_de_Movimentacao:"saida",
      material: buscaMaterial.encontrado,
      quantidadeRetirada: dados.resultadoQuantidadeRetirada,
      SaldoAtualizado: resultadoSaida.resultado,
      Justificativa: dados.resultadoJustificativa

}

}


export function ProcessamentoDeSaida(item,quantidade) {
     
            if(quantidade>item.quantidade)
                return {sucesso:false,
                        mensagem:"Saldo Insuficiente!"}
          
                        else{ item.quantidade -=  quantidade;}
                
             
                  return {sucesso: true, resultado: item.quantidade}


                }