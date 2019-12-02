import React from 'react';
import { useSelector } from 'react-redux';
import { Columns, Column, Icon } from 'bloomer';
import { useParams, Link, Redirect } from 'react-router-dom';
import Perfil from './Perfil';
import DropOptions from '../DropOptions';

export default function PerfilAluno() {
  const { id } = useParams();
  const students = useSelector(state => state.users.students);
  if (!students) return null;
  const student = students.find(user => user._id === id);
  if (!student) return <Redirect to='/alunos' />;

  return (
    <Column>
      <Columns>
        <Column>
          <Link to='/alunos'>
            <Icon isSize='large' className='fa fa-arrow-left' />
            Voltar
          </Link>
        </Column>
        <Column hasTextAlign='right'>
          <DropOptions buttonName='Editar Aluno' student={student} />
        </Column>
      </Columns>
      <Perfil student={student} />
    </Column>
  );
}
