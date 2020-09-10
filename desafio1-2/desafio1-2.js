/**
 * Desafio 1-2: Lidando com objetos e vetores
 * Construção e impressão de objetos
Crie um programa que armazena dados da empresa Rocketseat 
dentro de um objeto chamado empresa.
 */

 const empresa = {
    Nome: "Rocketseat",
    Cor: "Roxo",    
    Foco: "Programação",    
    Endereco:{
        Rua: "Rua Guilherme Gembala",
        Numero: 260,
    }  
 }

 console.log(`A empresa ${empresa.Nome} está localizada em ${empresa.Endereco.Rua}, ${empresa.Endereco.Numero}`)

 /**
  * Vetores e objetos
Crie um programa com um objeto para armazenar dados 
de um programador como nome, idade e tecnologias que trabalha.
  */
const programador = {
    nome: "Carlos",
    idade: 32,
    tecnologias:[
        {
            nome: 'C++', 
            especialidade: 'Desktop'
        },
        {
            nome: 'Python', 
            especialidade: 'Data Science'
        },
        {
            nome: 'JavaScript', 
            especialidade: 'Web/Mobile'
        }
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)
