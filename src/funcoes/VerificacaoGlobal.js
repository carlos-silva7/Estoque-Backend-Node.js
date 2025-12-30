
export function ValidarCancelamento(valor){if (valor == null) return{mensagem:"Processo cancelado!"}}


export function VerificarTexto(valor,campo){
        
        ValidarCancelamento(valor)
    
    if(valor.trim() == "") return{sucesso:false,mensagem:`${campo} não pode ficar vazio!`}
        
        valor = valor.trim().toLowerCase()

        return {sucesso:true,resultado:valor}
} 


export function ValidarNumero(valor,campo){

    ValidarCancelamento(valor)

    if(valor.trim() == "") return{sucesso:false, mensagem:`${campo} não pode ficar vazio!`}
    
        const numero = Number(valor)
    
        if(isNaN(numero)) return{sucesso:false, mensagem:`${campo} tem que ser um numero`};
        if(numero<=0) return{sucesso:false, mensagem:`${campo} valor invalido!\nNão poder ser numero negativo.`}

            return {sucesso:true, resultado:numero}

}


