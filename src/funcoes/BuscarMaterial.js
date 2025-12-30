export function LocalizarMaterial(lista,nomeProcurado) {

const result = lista.find((Material) => Material.nome === nomeProcurado);

if(result === undefined) return {
    sucesso:false,
    mensagem:"Material não encontrado",
    Nome_Procurado: nomeProcurado}


else{return {sucesso:true,
            encontrado: result}}


}

