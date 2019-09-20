
import { Column, Columns, Button, Icon } from 'bloomer';
import SimpleInput from '../SimpleInput';
import Tiles from './Tiles';

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
                        <span>Cadastrar Professor</span>
                    </Button>
                </Column>
            </Columns>
            <Tiles />
            <Tiles />
            <Tiles />
        </Column>
    )
}