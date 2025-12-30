
export function mostrarEstoque(produtos) {
    
if(!verificarPermissao("mostrarEstoque")) return{sucesso:false,mensagem:"Sem permissão para essa ação!"}

  for(const produto of produtos) {
        
      return{sucesso:true,
        nome:produto.nome,
        quantidade:produto.quantidade, unidade:produto.unidade,
        categoria:produto.categoria,
        estoqueMinimo:produto.estoqueMinimo
      }

  }
}