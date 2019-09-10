import { useState } from 'react';
import { Hero, HeroBody, Container, Title,
    Subtitle, Columns, Column 
} from 'bloomer';
import Router from 'next/router';
import CustomNotification from '../CustomNotification';
import Form from './Form';
import api from '../../utils/api';
import { login } from '../../utils/auth';

const backgroundStyles = {
    background: `linear-gradient(
        rgba(0, 158, 108, 0.5),
        rgba(0, 0, 0, 0.5)
      ), url(/static/img/bg.jpg) no-repeat center center fixed`,
    backgroundSize: 'cover' 
}

export default function Login() {
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('');
    const [loading, setLoading] = useState(false);


    async function handleSubmit(event, email, password){
        event.preventDefault();
        if (!email || !password) {
            setMessage('Preencha todos os campos para continuar!');
            setColor('danger');
        } else {
            setLoading(true);
            try {
                const { data: { token } } = await api.post('/login', { email, password });
                login(token);
                Router.push('/');
            } catch (err) {
                const alert = !err.response ? "Erro de servidor" : err.response.data.message
                setMessage(alert)
                setColor('danger');
            }
            setLoading(false);
        }
    };

    return(
        <Columns isVCentered isGapless>
            <Column isSize={{mobile: "full", desktop: "1/4" }}>
                <Hero isColor="primary" isFullHeight isBold>
                    <HeroBody>
                        <Container hasTextAlign="centered">
                            <Title>Gym App</Title>
                            <Subtitle>Faça o login para prosseguir</Subtitle>
                            <CustomNotification
                                message={message}
                                color={color}
                                close={()=> setMessage('')}
                            />
                            <Form loading={loading} handleSubmit={handleSubmit} />
                        </Container>
                    </HeroBody>
                </Hero>
            </Column> 
            <Column isHidden="touch">
                <Hero isFullHeight style={backgroundStyles} />
            </Column>               
        </Columns>
    );
}



