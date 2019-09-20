
import { Column, Columns, Button, Icon } from 'bloomer';
import CardItem from '../CardItem';
import SimpleInput from '../SimpleInput';
import Datatable from './Datatable';

export default function Alunos() {
    return (
        <Column>
            <Columns>
                <Column isSize={8}>
                    <SimpleInput />
                </Column>
                <Column isOffset={1}>
                    <Button isColor='primary'>
                        <Icon isSize='small' className='fas fa-plus'/>
                        <span>Cadastrar Aluno</span>
                    </Button>
                </Column>
            </Columns>
            <CardItem>
                <Datatable />
            </CardItem>
        </Column>
    )
}