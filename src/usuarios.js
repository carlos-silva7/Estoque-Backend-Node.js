import chalk from "chalk"
import { ValidarCancelamento,ValidarNumero,VerificarTexto} from "../funcoes/VerificacaoGlobal.js"

export let Usuarios = [{ login:"admin",senha:"Admin2809", Role:"Admin", ativo: true, primeiroAcesso: false},
                { login:"carlos.silva",senha:"Brasil2025!", Role:"Planejador de Manutenção", ativo: true, primeiroAcesso: true},
                { login: "francisco.oliveira", senha:"Brasil2025!", Role:"Mecânico",ativo: true, primeiroAcesso: true},
                { login: "antonio.fisco", senha:"Brasil2025!", Role:"Supervisor",ativo: true, primeiroAcesso: true},
                { login: "marta.oliveira", senha:"Brasil2025!", Role:"Gerente",ativo: true, primeiroAcesso: true}]

const permissoes = {
  
    login: ["Admin","Planejador de Manutenção","Mecânico","Supervisor","Gerente"],
    criarUsuario:["Admin"],
    bloquearCadastro:["Admin"],
    desbloquearCadastro:["Admin"],
    UsuariosBloqueados:["Admin","Planejador de Manutenção", "Supervisor","Gerente"],
    MostrarEstoque:["Admin","Planejador de Manutenção","Mecânico", "Supervisor","Gerente"],
    saidaEstoque: ["Planejador de Manutenção", "Supervisor", "Mecânico"],
    entradaEstoque: ["Planejador de Manutenção", "Supervisor"],
    estoqueBaixo: ["Planejador de Manutenção", "Supervisor", "Gerente"],
    cadastrarProduto: ["Planejador de Manutenção", "Supervisor"],
    removerProduto: ["Planejador de Manutenção", "Supervisor"],
    editarProduto: ["Planejador de Manutenção", "Supervisor"],
    ListarHistorico: ["Planejador de Manutenção", "Supervisor", "Gerente"],
    produtoMaisUsado: ["Planejador de Manutenção", "Supervisor", "Gerente"]
    
}
 




export let usuarioLogado = null


         export function criarUsuario(){
            try{

            if (!verificarPermissao("criarUsuario")) throw new Error("Acesso negado!")


            let nome_cadastro1 = VerificarTexto(prompt("Primeiro nome do usuario novo:"),"Nome do usuario");

            let sobrenome_cadastro = VerificarTexto(prompt("Sobrenome do usuario novo:"),"Sobrenome do usuario");
    
            const ponto = "."
            const login = nome_cadastro1+ponto+sobrenome_cadastro


            let existe = false

            for (let i = 0; i< Usuarios.length;i++) {
               if(login == Usuarios[i].login){existe=true}
            }

            if( existe == true) throw new Error("Login já cadastrado!!")
         

                    let EscolhaRole = ValidarNumero(prompt("Digite o numero do seu cargo:\n1 - Planejador\n2 - Mecânico\n3 - Supervisor\n4 - Gerente"),"Escolha")
                   
                    if(EscolhaRole<=0 || EscolhaRole>=5) throw new Error("Valor inválido!")
                        
                    let RoleFinal = ""

                        switch(EscolhaRole){

                        case 1: RoleFinal = "Planejador"
                        break;

                        case 2: RoleFinal = "Mecânico"
                        break;

                        case 3 : RoleFinal = "Supervisor"
                        break;

                        case 4: RoleFinal = "Gerente"
                        break; }
                    
                     Usuarios.push({login:login, senha:"Brasil2025!", Role:RoleFinal,ativo: true, primeiroAcesso: true})


                        }  
                    catch(erro) {console.log(chalk.red(`ERROR:${erro.message}`))}        
                        
                    }    





                   export function primeiroAcesso_trocarSenha(usuarioLogado) {
                       
                        try{
                            
                           if (usuarioLogado.primeiroAcesso == true){


                            let senhanova = prompt("Coloque sua senha:")
                            
                            ValidarCancelamento(senhanova)

                        if (senhanova.trim() === "") throw new Error("Campo vazio!!")
                    

                        let confirmacao = ValidarCancelamento(prompt("Confirme sua senha:"))

                        if(confirmacao != senhanova) throw new Error("Senhas digitadas não são iguais.")
                            else
                        {usuarioLogado.senha = senhanova
                         usuarioLogado.primeiroAcesso = false}
                             
                         console.log("Senha alterada com sucesso!")
      
                        } 
                    }
                    catch(erro){console.log("ERROR:", erro.message)}

                    }

                  

                    export function login() {

                        try{

                        let colocar_usuario =   VerificarTexto(prompt("Digite o usuario:"),"Usuario")
                                
                        let indice = -1    

                        for(let i = 0;i< Usuarios.length; i++){

                            if(colocar_usuario == Usuarios[i].login){indice = i; break;}}           

                            if(indice == -1) throw new Error("Usuario não existe");

                            if(Usuarios[indice].ativo == false)throw new Error("Usuario Bloquado")
                            
                            

                            let colocar_senha = ValidarCancelamento(prompt("Digite a senha:"))

                            if(colocar_senha != Usuarios[indice].senha) throw new Error("Senha incorreta")
                            
                            if(Usuarios[indice].primeiroAcesso == true){primeiroAcesso_trocarSenha(Usuarios[indice])}

                             
                       usuarioLogado = Usuarios[indice];
                       
                       
                            console.log("--------------- Login realizao! ----------------")
                        console.log("Bem vindo,",Usuarios[indice].login)
                        console.log("Seu cargo:", Usuarios[indice].Role)

                        
                    } catch(erro) {console.log(chalk.red(`ERROR:${erro.message}`));return}

                }


                    export function bloquearCadastro() {

                        try{
                        if (!verificarPermissao("bloquearCadastro")) throw new Error("Acesso negado!")

                        let nomeBloquear = VerificarTexto(prompt("Digite nome do usuario a ser bloqueado:"),"Nome do usuario")
 
                    let indice = -1

                    for (let i = 0; i < Usuarios.length; i++) {
                        if (nomeBloquear == Usuarios[i].login) { indice = i;break;} }
                        
                         if (indice == -1) throw new Error("Usuario não encontrado!");
                        
                         Usuarios[indice].ativo = false
     
                        }
                    catch(erro) {console.log(chalk.red(`ERROR:${erro.message}`))}
                }


                    export function desbloquearCadastro() {

                        try{
                            
                        if (!verificarPermissao("desbloquearCadastro")) throw new Error("Acesso negado!")


                        let nomeDesbloquear = VerificarTexto(prompt("Digite nome do usuario a ser Desbloqueado:"),"Nome do usuario")

                        let indice = -1

                        for (let i = 0; i < Usuarios.length; i++) {
                        if (nomeDesbloquear == Usuarios[i].login) { indice = i;break;} }


                        if (indice == -1) throw new Error("Usuario não encontrado!");

                        Usuarios[indice].ativo = true

                    }
                    catch(erro){console.log(chalk.red(`ERROR:${erro.message}`))}
                }


                    export function UsuariosBloqueados() {

                        try{
                        if (!verificarPermissao("UsuariosBloqueados")) throw new Error("Acesso negado!")

                        

                        const usuariosBloqueados = Usuarios.filter(usuario => usuario.ativo == false)

                        if(usuariosBloqueados.length === 0){console.log("Nenhum usuario bloqueado.") ; return}
                        
                        console.log("Usuarios Bloqueados:")
                        console.log(usuariosBloqueados)
                    }
                        catch(erro) {console.log(chalk.red(`ERROR:${erro.message}`))}
                       
                }

                    export function verificarPermissao(acao) {

                        if(usuarioLogado == null){return false}

                        if(!permissoes[acao]){return false}

                        if (!permissoes[acao].includes(usuarioLogado.Role)) 
                        {return false}
                        else
                            if(permissoes[acao].includes(usuarioLogado.Role)) 
                            {return true}
                

            }

                        


                    
                        
                





                










      
                



   