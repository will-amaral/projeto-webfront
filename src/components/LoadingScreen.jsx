import React, { useEffect } from 'react';
import NProgress from 'nprogress';
import { Box, LinearProgress } from '@material-ui/core';

import { useLoadingStyles } from './styles';

function LoadingScreen() {
  const classes = useLoadingStyles();

  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <div className={classes.root}>
      <Box width={400}>
        <LinearProgress />
      </Box>
    </div>
  );
}

export default LoadingScreen;
