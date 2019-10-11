import React from 'react';
import { Columns, Column, Icon } from 'bloomer';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Perfil from './Perfil';
import DropOptions from '../DropOptions';

export default function PerfilAluno() {
  const { id } = useParams();

  return (
    <Column>
      <Columns>
        <Column>
          <Link to='/alunos'>
            <a>
              <Icon isSize='large' className='fa fa-arrow-left' />
              Voltar
            </a>
          </Link>
        </Column>
        <Column hasTextAlign='right'>
          <DropOptions buttonName='Editar Aluno' />
        </Column>
      </Columns>
      <Perfil id={id} />
    </Column>
  );
}
