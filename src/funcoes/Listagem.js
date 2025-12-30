import { verificarPermissao } from "../src/usuarios";


export function ListarHistorico(historico){

           
            
                if (!verificarPermissao("ListarHistorico")) return{sucesso:false,mensagem:"Sem permissão para realizar a ação!"}
                
                
                for(const chave of historico)
                {
               
                return{nome:chave.nome,
                Tipo_de_Movimentacao:chave.Tipo_de_Movimentacao,                
                quantidade:chave.quantidade,
                SaldoAtualizado:chave.SaldoAtualizado,
                data:chave.DataHora.toLocaleString("pt-BR"),
                usuario:chave.usuario,
                justificativa:chave.justificativa
                }
            }

         
        } 