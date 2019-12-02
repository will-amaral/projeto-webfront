import React from 'react';
import {
  Modal,
  ModalBackground,
  ModalContent,
  ModalClose,
  Box,
  ModalCard,
  ModalCardBody,
  Button,
  ModalCardHeader,
  ModalCardTitle,
  ModalCardFooter,
  Delete
} from 'bloomer';

export default function ModalContainer({
  active,
  close,
  children,
  colored,
  isCard,
  title,
  confirm
}) {
  const style = {
    color: {
      backgroundColor: '#00d1b2'
    },
    size: {
      width: isCard ? '30vw' : '60vw'
    }
  };

  if (isCard) {
    return (
      <Modal hasTextAlign='left' isActive={active}>
        <ModalBackground onClick={close} />
        <ModalCard style={style.size}>
          <ModalCardHeader>
            <ModalCardTitle>{title}</ModalCardTitle>
            <Delete onClick={close} />
          </ModalCardHeader>
          <ModalCardBody>{children}</ModalCardBody>
          <ModalCardFooter>
            <Button isColor='primary' onClick={confirm}>
              Sim
            </Button>
            <Button isColor='danger' onClick={close}>
              Cancelar
            </Button>
          </ModalCardFooter>
        </ModalCard>
      </Modal>
    );
  }

  return (
    <Modal isActive={active}>
      <ModalBackground style={colored && style.color} onClick={close} />
      <ModalContent style={style.size}>
        <Box>{children}</Box>
      </ModalContent>
      <ModalClose onClick={close} />
    </Modal>
  );
}
