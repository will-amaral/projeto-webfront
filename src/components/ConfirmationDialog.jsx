import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from '@material-ui/core';

function ConfirmationDialog(props) {
  const { title, open, handleClose, handleConfirm, text } = props;

  return (
    <Dialog maxWidth='sm' fullWidth open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button variant='contained' onClick={handleConfirm} color='primary' autoFocus>
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmationDialog;
