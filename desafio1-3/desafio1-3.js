/**
 * Usuários e tecnologias
Crie um programa que armazena um array de usuários (objetos), 
cada usuário tem um nome e suas tecnologias (novo array)
 */

/*const usuarios = [
    { 
        nome: "Carlos",
        tecnologias: [
            "HTML",
            "CSS"
        ] 
    },
    { 
        nome: "Jasmine",
        tecnologias: [
            "JavaScript",
            "CSS"
        ] 
    },
    { 
        nome: "Tuane",
        tecnologias: [
            "HTML",
            "Node.js"
        ]
    }
  ];

  function lista(){
    for (let i = 0; i < usuarios.length; i++)
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias[0]}, ${usuarios[i].tecnologias[1]}`)
  }

  function checaSeUsuarioUsaCSS() {
      for (let i = 0; i < usuarios.length; i++)
      for (let j = 0; j < usuarios[i].tecnologias.length; j++)
      if (usuarios[i].tecnologias[j] == "CSS"){
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
      }
  }*/

  /*Soma de despesas e receitas
Crie um programa que calcula a 
soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).*/

const usuarios = [
    {
        nome: 'Salvio',
        receitas: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9]
    },
    {
        nome: 'Marcio',
        receitas: [24.6, 214.3, 45.3],
        despesas: [185.3, 12.1, 120.0]
    },
    {
        nome: 'Lucia',
        receitas: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    }
]

function calculaSaldo(usuarios) {
    let somaReceita = 0
    for (let i = 0; i < usuarios.receitas.length; i++) {
        somaReceita = somaReceita + usuarios.receitas[i]
    }
    let somaDespesa = 0
    for (let i = 0; i < usuarios.despesas.length; i++) {
        somaDespesa = somaDespesa + usuarios.despesas[i]
    }
    return somaReceita - somaDespesa
}


function imprimeSaldo() {
    for (let i = 0; i < usuarios.length; i++) {
        let saldo = calculaSaldo(usuarios[i])
        if (saldo < 0) {
            console.log(`${usuarios[i].nome} possui saldo NEGATIVO de: ${saldo}`)
        }else{
            console.log(`${usuarios[i].nome} possui saldo POSITIVO de: ${saldo}`)
        }
    }
}

imprimeSaldo()