export const routes = {
    geral: [
        {
            path: '/',
            name: 'Dashboard',
            key: 1
        },
        {
            path: '/alunos',
            name: 'Alunos',
            key: 2
        },
        {
            path: '/professores',
            name: 'Professores',
            key: 3
        },
        {
            path: '/exercicios',
            name: 'Exercícios',
            key: 4
        }
    ],
    admin: [
        {
            path: '/financeiro',
            name: 'Financeiro',
            key: 5
        },
        {
            path: '/mensagens',
            name: 'Mensagens',
            key: 6
        },
        {
            path: '/relatorios',
            name: 'Relatórios',
            key: 7
        },
    ],
    config: [
        {
            path: '/perfil',
            name: 'Meu Perfil',
            key: 8
        },
        {
            path: '/conta',
            name: 'Minha Conta',
            key: 9
        },
        {
            path: '/ajuda',
            name: 'Ajuda',
            key: 10 
        },
    ]
}