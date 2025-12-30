

export function RegistrarHistorico(lista,nome,quantidadeSolict,justificativa,saldoAtt,Tipo_de_Movimentacao) {

    return  lista.push({nome:nome,
                quantidade:quantidadeSolict,
                justificativa:justificativa,
                SaldoAtualizado: saldoAtt,
                Tipo_de_Movimentacao:Tipo_de_Movimentacao,
                Data: new Date(),
                usuario:""

    })  
    
}