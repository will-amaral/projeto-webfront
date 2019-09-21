
import { useState } from 'react';
import { Column, Columns, Button, Icon } from 'bloomer';
import CardContainer from '../CardContainer';
import SimpleInput from '../SimpleInput';
import Datatable from './Datatable';
import AddAluno from './AddAluno';

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
                        <Icon isSize='small' className='fas fa-plus'/>
                        <span>Cadastrar Aluno</span>
                    </Button>
                </Column>
            </Columns>
            <CardContainer>
                <Datatable />
            </CardContainer>
            <AddAluno active={modal} close={() => setModal(false)} />
        </Column>
    )
}