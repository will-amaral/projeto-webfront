import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import { Logo } from 'components';

import { useSplashStyles } from './styles';

function SlashScreen() {
  const classes = useSplashStyles();

  return (
    <div className={classes.root}>
      <Box display='flex' justifyContent='center' mb={6}>
        <Logo className={classes.logo} />
      </Box>
      <CircularProgress />
    </div>
  );
}

export default SlashScreen;
