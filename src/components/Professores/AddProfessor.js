import React from 'react';
import ModalContainer from '../ModalContainer';
import Signup from '../Signup';

export default function AddProfessor({ active, close }) {
  return (
    <ModalContainer colored active={active} close={close}>
      <Signup extend />
    </ModalContainer>
  );
}
