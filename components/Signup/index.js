import { useState } from 'react';
import { Title, Subtitle, Columns } from 'bloomer';
import Container from '../BoldContainer';
import CustomNotification from '../CustomNotification';
import Form from './Form';

export default function Signup() {
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSignup() {
        return
    }

    return (
        <Container>
            <Title>Crie sua conta</Title>
            <Subtitle>Entre seus dados abaixo para criar uma conta</Subtitle>
            <CustomNotification
                    message={message}
                    color={color}
                    close={()=> setMessage('')}
            />
            <Columns isCentered>
                <Form loading={loading} handleSignup={handleSignup} />
            </Columns>
        </Container>
    );
}
