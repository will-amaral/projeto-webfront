import React, { useState } from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  Icon,
  Button,
  DropdownDivider
} from 'bloomer';
import ConfirmAction from './ConfirmAction';

export default function DropOptions({ buttonName }) {
  const [modal, setModal] = useState(false);

  return (
    <Dropdown isHoverable>
      <DropdownTrigger>
        <Button isColor='primary'>
          <Icon isSize='small' className='fa fa-user-edit' />
          <span>{buttonName}</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownContent>
          <DropdownItem href='#'>
            <Icon isSize='small' className='fa fa-edit' />
            Editar Informações
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem href='#' onClick={() => setModal(true)}>
            <Icon isSize='small' className='fa fa-trash' />
            Excluir Usuário
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem href='#'>
            <Icon isSize='small' className='fa fa-share-alt' />
            Compartilhar Perfil
          </DropdownItem>
        </DropdownContent>
      </DropdownMenu>
      <ConfirmAction active={modal} close={() => setModal(false)} />
    </Dropdown>
  );
}
