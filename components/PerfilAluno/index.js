import { Columns, Column, Icon, Button } from 'bloomer';
import Link from 'next/link';
import Perfil from './Perfil';
import DropOptions from '../DropOptions'

export default function PerfilAluno(props) {
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
            <Perfil />
        </Column>
    )
}