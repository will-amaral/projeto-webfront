import React from 'react';
import ModalContainer from './ModalContainer';

export default function ConfirmAction({ active, close }) {
  return (
    <ModalContainer
      isCard
      title='Deletar Usuário'
      active={active}
      close={close}
    >
      <p>Tem certeza de que deseja deletar este usuário?</p>
    </ModalContainer>
  );
}
