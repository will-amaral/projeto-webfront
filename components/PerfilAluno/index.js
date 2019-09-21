import { Columns, Column, Icon, Button } from 'bloomer';
import Link from 'next/link';
import Perfil from './Perfil';

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
                    <Button isColor='primary'>
                        <Icon isSize='small' className='fa fa-user-edit'/>
                        <span>Editar Aluno</span>
                    </Button>
                </Column>
            </Columns>
            <Perfil />
        </Column>
    )
}