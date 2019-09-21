import { Columns, Column, Icon, Button } from 'bloomer';
import Link from 'next/link';
import Perfil from './Perfil';
import Main from './Main';
import { data } from '../mockData';
import DropOptions from './DropOptions'

export default function PerfilAluno({ id }) {
    const { name, area, email, level, photo } = data.find(obj => obj.id.toString() === id);

    return (
        <Column>
            <Columns>
                <Column>
                    <Link href='/professores'>
                    <a>
                        <Icon isSize='large' className='fa fa-arrow-left' />
                        Voltar
                    </a>
                    </Link>
                </Column>
                <Column hasTextAlign='right'>
                    <DropOptions />
                </Column>
            </Columns>
            <Columns>
                <Column isSize={5}>
                    <Main 
                    name={name} 
                    photo={photo} 
                    area={area} 
                    level={level} 
                    />
                </Column>
                <Column>
                    <Perfil
                    email={email}
                    area={area}
                    level={level}
                    />
                </Column>
            </Columns>
        </Column>
    )
}