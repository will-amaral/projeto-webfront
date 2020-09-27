import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  action: {
    backgroundColor: theme.palette.common.white,
  },
  actionIcon: {
    marginRight: theme.spacing(1),
  },
  image: {
    width: '100%',
    maxHeight: 400,
  },
  fontWeightMedium: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  title: {
    position: 'relative',
    '&:before': {
      position: 'absolute',
      bottom: -8,
      left: 0,
      content: '" "',
      height: 3,
      width: 48,
      backgroundColor: theme.palette.primary.main,
    },
  },
  arrowIcon: {
    marginLeft: theme.spacing(1),
  },
}));
