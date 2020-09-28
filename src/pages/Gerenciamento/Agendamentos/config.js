import {
  ViewComfyOutlined,
  ViewWeekOutlined,
  ViewDayOutlined,
  ViewAgendaOutlined,
} from '@material-ui/icons';

export const viewOptions = [
  {
    label: 'Mês',
    value: 'dayGridMonth',
    icon: ViewComfyOutlined,
  },
  {
    label: 'Semana',
    value: 'timeGridWeek',
    icon: ViewWeekOutlined,
  },
  {
    label: 'Dia',
    value: 'timeGridDay',
    icon: ViewDayOutlined,
  },
  {
    label: 'Agenda',
    value: 'listWeek',
    icon: ViewAgendaOutlined,
  },
];
