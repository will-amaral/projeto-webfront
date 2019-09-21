import { Columns, Column, Title, Subtitle, Section, Button, Icon } from 'bloomer';
import styles from '../styles';

export default function DetailsTab({ email, area, level }) {
    return (
        <Section>
        <Columns isMultiline>
            <Column isSize='1/2'>
                <Title isSize={6}>E-mail</Title>
                <Subtitle isSize={6}>{email}</Subtitle>
            </Column>
            <Column isSize='1/2'>
                <Title isSize={6}>Telefone</Title>
                <Subtitle isSize={6}>(12) 12345-6789</Subtitle>
            </Column>
            <Column isSize='1/2'>
                <Title isSize={6}>Cargo</Title>
                <Subtitle isSize={6}>{level}</Subtitle>
            </Column>
            <Column isSize='1/2'>
                <Title isSize={6}>Especialização</Title>
                <Subtitle isSize={6}>{area}</Subtitle>
            </Column>
            <Column>
                <Title isSize={6}>Endereço</Title>
                <Subtitle isSize={6}>Rua de Tal, nº 123, Campos do Jordão - SP</Subtitle>
            </Column>
        </Columns>
        <Columns>
            <Column hasTextAlign='right'>
            <div style={styles.separator} />
            <Button isColor='primary'>
                <Icon isSize='small' className='fa fa-envelope'/>
                <span>Enviar Mensagem</span>
            </Button>            
            </Column>
        </Columns>

        </Section>
    )
}