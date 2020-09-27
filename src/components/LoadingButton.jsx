import React from 'react';
import { Button, CircularProgress } from '@material-ui/core';

function LoadingButton(props) {
  const { children, loading, ...rest } = props;
  return (
    <Button {...rest}>
      {children}
      {loading && <CircularProgress size={15} style={{ marginLeft: 5 }} />}
    </Button>
  );
}

export default LoadingButton;
