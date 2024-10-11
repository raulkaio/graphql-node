module.exports = {
    usuarios: [
        {
        id: 123,
        idade: 20,
        salario: 1000.32,
        nome: "Raul",
        ativo: true,
        tecnologias: ['GraphQL', 'NodeJS'],
        perfil: 1
        },
        {
        id: 22,
        idade: 25,
        salario: 100000.32,
        nome: "Raulzeras",
        ativo: true,
        tecnologias: ['GraphQL', 'NodeJS'],
        perfil: 2
        },
        {
        idade: Math.floor(Math.random() * 100),
        salario: Math.random() * 10000,
        nome: "Random Name",
        ativo: Math.random() < 0.5,
        id: Math.floor(Math.random() * 1000),
        tecnologias: ['Random Tech 1', 'Random Tech 2']
        }
    ],
    
    produtos: [
        {
        nome: "Notebook",
        valor: 1000.32,
        typo: "Eletronico"
        },
        {
        nome: "Mouse",
        valor: 100.32,
        typo: "Eletronico"
        }
    ],
    
    perfis: [
        { id: 1, nome: "Administrador", tipo: 'ADMIN' },
        { id: 2, nome: "Usuário", tipo: 'USER' }
    ]
}