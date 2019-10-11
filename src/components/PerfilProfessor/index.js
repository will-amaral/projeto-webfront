import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Columns, Column, Icon } from 'bloomer';
import { Link } from 'react-router-dom';
import Perfil from './Perfil';
import Main from './Main';
import DropOptions from '../DropOptions';

export default function PerfilProfessor() {
  const { id } = useParams();
  const instructors = useSelector(state => state.users.instructors);
  if (!instructors) return null;
  const instructor = instructors.find(user => user._id === id);
  console.log(instructor);
  if (!instructor) return <div>Professor não encontrado</div>;

  return (
    <Column>
      <Columns>
        <Column>
          <Link to='/professores'>
            <a>
              <Icon isSize='large' className='fa fa-arrow-left' />
              Voltar
            </a>
          </Link>
        </Column>
        <Column hasTextAlign='right'>
          <DropOptions buttonName='Editar Professor' />
        </Column>
      </Columns>
      <Columns>
        <Column isSize={5}>
          <Main user={instructor} />
        </Column>
        <Column>
          <Perfil user={instructor} />
        </Column>
      </Columns>
    </Column>
  );
}
