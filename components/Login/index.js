import { useState } from 'react';
import { Hero, HeroBody, Container, Title,
    Subtitle, Columns, Column, Image
} from 'bloomer';
import Router from 'next/router';
import CustomNotification from '../CustomNotification';
import Form from './Form';
import api from '../../utils/api';
import { login } from '../../utils/auth';
import styles from '../styles';

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
                console.log(err.response.data.message)
                let alert;
                if (!err.response) {
                    alert = 'Erro de servidor';
                } else if (!err.response.data.message) {
                    alert = 'Senha incorreta'
                } else {
                    alert = err.response.data.message;
                }
                setMessage(alert)
                setColor('danger');
                setLoading(false);
            }
        }
    };

    return (
        <Columns isVCentered isGapless>
            <Column isSize={{mobile: "full", desktop: "1/4" }}>
                <Hero isColor='primary' isFullHeight style={styles.gradient}>
                    <HeroBody>
                        <Container hasTextAlign="centered" style={{ margin: 20}}>
                            <Image style={styles.logo} src='/static/img/logo-white.png' />
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
                <Hero isFullHeight style={styles.background} />
            </Column>               
        </Columns>
    );
}



