import React, { useState } from 'react';
import { Column, Columns, Button, Icon } from 'bloomer';
import SimpleInput from '../SimpleInput';
import Cards from './Cards';
import AddProfessor from './AddProfessor';

export default function Alunos() {
  const [modal, setModal] = useState(false);
  return (
    <Column>
      <Columns>
        <Column isSize={8}>
          <SimpleInput />
        </Column>
        <Column hasTextAlign='right'>
          <Button isColor='primary' onClick={() => setModal(true)}>
            <Icon isSize='small' className='fas fa-plus' />
            <span>Cadastrar Professor</span>
          </Button>
        </Column>
      </Columns>
      <Cards />
      <AddProfessor active={modal} close={() => setModal(false)} />
    </Column>
  );
}
