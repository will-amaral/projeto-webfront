import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Column, Columns, Button, Icon } from 'bloomer';
import CardContainer from '../CardContainer';
import SimpleInput from '../SimpleInput';
import Datatable from './Datatable';
import AddAluno from './AddAluno';
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
            <span>Cadastrar Aluno</span>
          </Button>
        </Column>
      </Columns>
      <CardContainer>
        <Datatable />
      </CardContainer>
      <AddAluno active={modal} close={() => dispatch(toggleModal(false))} />
    </Column>
  );
}
