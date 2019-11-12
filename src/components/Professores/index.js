import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Column, Columns, Button, Icon } from 'bloomer';
import SimpleInput from '../SimpleInput';
import Cards from './Cards';
import AddProfessor from './AddProfessor';
import { toggleModal } from '../../actions';

export default function Alunos() {
  const modal = useSelector(state => state.modal);
  const dispatch = useDispatch();

  return (
    <Column>
      <Columns>
        <Column isSize={8}>
          <SimpleInput />
        </Column>
        <Column hasTextAlign='right'>
          <Button isColor='primary' onClick={() => dispatch(toggleModal(true))}>
            <Icon isSize='small' className='fas fa-plus' />
            <span>Cadastrar Professor</span>
          </Button>
        </Column>
      </Columns>
      <Cards />
      <AddProfessor active={modal} close={() => dispatch(toggleModal(false))} />
    </Column>
  );
}
