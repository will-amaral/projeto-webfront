import React from 'react';
import ModalContainer from './ModalContainer';

export default function ConfirmAction({ active, close, confirm }) {
  return (
    <ModalContainer
      confirm={confirm}
      isCard
      title='Deletar Usuário'
      active={active}
      close={close}
    >
      <p>Tem certeza de que deseja deletar este usuário?</p>
    </ModalContainer>
  );
}
