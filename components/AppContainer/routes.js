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
            path: '/saude',
            name: 'Histórico de Saúde',
            key: 6
        },
        {
            path: '/alertas',
            name: 'Alertas',
            key: 7
        },
        {
            path: '/relatorios',
            name: 'Relatórios',
            key: 8
        },
    ],
    config: [
        {
            path: '/perfil',
            name: 'Meu Perfil',
            key: 9
        },
        {
            path: '/conta',
            name: 'Minha Conta',
            key: 10
        },
        {
            path: '/ajuda',
            name: 'Ajuda',
            key: 11
        },
    ]
}