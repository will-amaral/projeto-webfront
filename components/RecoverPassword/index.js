import { useState } from 'react';
import { Title, Subtitle, Columns } from 'bloomer';
import Container from '../BoldContainer';
import CustomNotification from '../CustomNotification'
import Form from './Form';

export default function RecoverPassword() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('');
    
    async function handleSubmit() {
        return
    }
    return (
        <Container>
            <Title>Recuperar Senha</Title>
            <Subtitle>Entre seu e-mail abaixo e enviaremos um link de recuperação de senha</Subtitle>
            <CustomNotification
                    message={message}
                    color={color}
                    close={()=> setMessage('')}
            />
            <Columns isCentered>
                <Form loading={loading} handleSubmit={handleSubmit} />
            </Columns>
        </Container>
    );
}