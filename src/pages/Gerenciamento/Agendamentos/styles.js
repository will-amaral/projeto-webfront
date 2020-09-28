import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  calendar: {
    '& .fc-toolbar-title': {
      ...theme.typography.h2,
    },
    '& .fc-list-event-time': {
      ...theme.typography.body2,
    },
    '& .fc-list-event-title': {
      ...theme.typography.body1,
    },
    '& .fc-list-day-text': {
      ...theme.typography.h6,
    },
    '& .fc-list-day-side-text': {
      ...theme.typography.h6,
    },
    '& .fc-list-empty': {
      ...theme.typography.subtitle1,
    },
    '& .fc-theme-standard .fc-list-day-cushion': {
      backgroundColor: theme.palette.background.dark,
    },
    '& .fc .fc-list-empty-cushion': {
      ...theme.typography.subtitle1,
    },
    '& .fc .fc-button-primary': {
      ...theme.typography.button,
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));
