import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
import { deleteUser } from '../actions';

export default function DropOptions({ buttonName, student }) {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();

  function onDelete() {
    dispatch(deleteUser(student));
    setModal(false);
  }

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
      <ConfirmAction confirm={onDelete} active={modal} close={() => setModal(false)} />
    </Dropdown>
  );
}
