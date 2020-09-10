/**
 * Usuários e tecnologias
Crie um programa que armazena um array de usuários (objetos), 
cada usuário tem um nome e suas tecnologias (novo array)
 */

const usuarios = [
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

  lista()