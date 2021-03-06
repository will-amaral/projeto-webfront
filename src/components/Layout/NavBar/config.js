import {
  Home,
  Settings,
  Users,
  Briefcase,
  BarChart,
  Calendar,
  MessageCircle,
} from 'react-feather';

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
    subheader: 'Gerenciamento',
    items: [
      {
        title: 'Alunos',
        icon: Users,
        href: '/gerenciamento/alunos',
      },
      {
        title: 'Instrutores',
        icon: Briefcase,
        href: '/gerenciamento/instrutores',
      },
      {
        title: 'Relatórios',
        icon: BarChart,
        href: '/gerenciamento/relatorios',
      },
      {
        title: 'Agendamentos',
        icon: Calendar,
        href: '/gerenciamento/agendamentos',
      },
      {
        title: 'Mensagens',
        icon: MessageCircle,
        href: '/gerenciamento/mensagens',
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
    subheader: 'Gerenciamento',
    items: [
      {
        title: 'Alunos',
        icon: Users,
        href: '/gerenciamento/alunos',
      },
      {
        title: 'Instrutores',
        icon: Briefcase,
        href: '/gerenciamento/instrutores',
      },
      {
        title: 'Relatórios',
        icon: BarChart,
        href: '/gerenciamento/relatorios',
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

export const studentRoutes = [
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
    subheader: 'Gerenciamento',
    items: [
      {
        title: 'Alunos',
        icon: Users,
        href: '/gerenciamento/alunos',
      },
      {
        title: 'Instrutores',
        icon: Briefcase,
        href: '/gerenciamento/instrutores',
      },
      {
        title: 'Relatórios',
        icon: BarChart,
        href: '/gerenciamento/relatorios',
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
