import { Home, Settings, Folder } from 'react-feather';
import { School, People } from '@material-ui/icons';

export const adminRoutes = [
  {
    subheader: 'Geral',
    items: [
      {
        title: 'Home',
        icon: Home,
        href: '/home',
      },
    ],
  },
  {
    subheader: 'Educacional',
    items: [
      {
        title: 'Turmas',
        icon: People,
        href: '/educacional/turmas',
      },
      {
        title: 'Disciplinas',
        icon: School,
        href: '/educacional/disciplinas',
      },
      {
        title: 'Biblioteca de Conteúdo',
        icon: Folder,
        href: '/educacional/conteudo',
      },
      // {
      //   title: 'Exercicios',
      //   icon: List,
      //   href: '/educacional/exercicios',
      //   items: [
      //     { title: 'Lista de Exercícios', href: '/educacional/exercicios' },
      //     { title: 'Adicionar Exercício', href: '/educacional/exercicios/adicionar' },
      //     { title: 'Detalhes Exercício', href: '/educacional/exercicios/1' },
      //   ],
      // },
    ],
  },
  {
    subheader: 'Configurações',
    items: [
      {
        title: 'Preferências',
        icon: Settings,
        href: '/configuracoes',
      },
    ],
  },
];

export const teacherRoutes = [
  {
    subheader: 'Geral',
    items: [
      {
        title: 'Home',
        icon: Home,
        href: '/home',
      },
    ],
  },
  {
    subheader: 'Educacional',
    items: [
      {
        title: 'Turmas',
        icon: People,
        href: '/educacional/turmas',
      },
      {
        title: 'Biblioteca de Conteúdo',
        icon: Folder,
        href: '/educacional/conteudo',
      },
    ],
  },
  {
    subheader: 'Configurações',
    items: [
      {
        title: 'Preferências',
        icon: Settings,
        href: '/configuracoes',
      },
    ],
  },
];
