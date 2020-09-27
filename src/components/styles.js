import { makeStyles } from '@material-ui/core';

export const useSplashStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    padding: theme.spacing(3),
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 2000,
  },
  logo: {
    width: 200,
    maxWidth: '100%',
  },
}));

export const useLoadingStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    minHeight: '100%',
    padding: theme.spacing(3),
  },
}));

export const useHeaderStyles = makeStyles((theme) => ({
  root: {},
  action: {
    marginBottom: theme.spacing(1),
    '& + &': {
      marginLeft: theme.spacing(1),
    },
  },
  actionIcon: {
    marginRight: theme.spacing(1),
  },
}));

export const useDefaultPageStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

export const useTagsStyle = makeStyles((theme) => ({
  root: {},
  addTab: {
    marginLeft: theme.spacing(2),
  },
  tag: {
    '& + &': {
      marginLeft: theme.spacing(1),
    },
  },
}));

export const useTableStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
}));
