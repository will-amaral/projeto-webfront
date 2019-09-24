import { Columns, Column, Icon } from 'bloomer';
import Link from 'next/link';
import Perfil from './Perfil';
import DropOptions from '../DropOptions';
import { data } from '../mockData2';

export default function PerfilAluno({ id }) {
    const { name, active, email, photo } = data.find(obj => obj.id.toString() === id);

    return (
        <Column>
            <Columns>
                <Column>
                    <Link href='/alunos'>
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
            <Perfil
            name={name}
            active={active}
            email={email}
            photo={photo}
            />
        </Column>
    )
}