//Sistema de estoque//
import { ListarHistorico,produtoMaisUsado} from "./historico.js";
import { entradaEstoque,saidaEstoque,MostrarEstoque,estoqueBaixo,editarProduto } from "./produtos.js";
import { ValidarNumero } from "../funcoes/funcoesVerificacaoGlobal.js";
import { bloquearCadastro, criarUsuario, desbloquearCadastro, login, UsuariosBloqueados } from "./usuarios.js";
import chalk from "chalk";


//menu
try{
login() 
}
catch(erro){console.log(chalk.red(`ERROR:${erro.message}`))} 

let opcao = ValidarNumero(prompt("1 - Entrada\n2 - Saida\n3 - Estoque\n4 - Historico\n5 - Sair\n6 - Estoque Baixo\n7 - Produto mais utilizado\n8 - Editar Produto\n9 - Criar Usuario\n10 - Usuarios bloqueados\n11 - Bloquear Cadastro\n12 - Desbloquear Cadastro"),"opção");


while(opcao!=5){


switch(opcao){

case 1: entradaEstoque();

break;

case 2: saidaEstoque();

break;

case 3: MostrarEstoque();

break;

case 4: ListarHistorico();

break;

case 6: estoqueBaixo();
break;

case 7: produtoMaisUsado();
break;

case 8: editarProduto();
break;

case 9: criarUsuario();
break;

case 10: UsuariosBloqueados();
break;

case 11: bloquearCadastro();
break;

case 12: desbloquearCadastro();


}
opcao = ValidarNumero(prompt("1 - Entrada\n2 - Saida\n3 - Estoque\n4 - Historico\n5 - Sair\n6 - Estoque Baixo\n7 - Produto mais utilizado\n8 - Editar Produto\n9 - Criar Usuario\n10 - Usuarios bloqueados\n11 - Bloquear Cadastro\n12 - Desbloquear Cadastro"),"opção");

}  


