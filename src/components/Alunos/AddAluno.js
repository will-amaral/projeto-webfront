import React from 'react';
import ModalContainer from '../ModalContainer';
import Signup from '../Signup';

export default function AddAluno({ active, close }) {
  return (
    <ModalContainer colored active={active} close={close}>
      <Signup />
    </ModalContainer>
  );
}
