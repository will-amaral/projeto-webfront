import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Hero,
  HeroBody,
  Container,
  Title,
  Subtitle,
  Columns,
  Column,
  Image
} from 'bloomer';
import { Redirect } from 'react-router-dom';
import CustomNotification from '../CustomNotification';
import Logo from '../../img/logo-white.png';
import Form from './Form';
import api from '../../utils/api';
import styles from '../styles';
import { signIn } from '../../actions';

export default function Login() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event, email, password) {
    event.preventDefault();
    if (!email || !password) {
      setMessage('Preencha todos os campos para continuar!');
      setColor('danger');
    } else {
      setLoading(true);
      try {
        const {
          data: { token }
        } = await api.post('/login', { email, password });
        dispatch(signIn(token));
      } catch (err) {
        console.log(err.response.data.message);
        let alert;
        if (!err.response) {
          alert = 'Erro de servidor';
        } else if (!err.response.data.message) {
          alert = 'Senha incorreta';
        } else {
          alert = err.response.data.message;
        }
        setMessage(alert);
        setColor('danger');
        setLoading(false);
      }
    }
  }

  if (auth) return <Redirect to='/' />;

  return (
    <Columns isVCentered isGapless>
      <Column isSize={{ mobile: 'full', desktop: '1/4' }}>
        <Hero isColor='primary' isFullHeight style={styles.gradient}>
          <HeroBody>
            <Container hasTextAlign='centered' style={{ margin: 20 }}>
              <Image style={styles.logo} src={Logo} />
              <Title>Gym App</Title>
              <Subtitle>Faça o login para prosseguir</Subtitle>
              <CustomNotification
                message={message}
                color={color}
                close={() => setMessage('')}
              />
              <Form loading={loading} handleSubmit={handleSubmit} />
            </Container>
          </HeroBody>
        </Hero>
      </Column>
      <Column isHidden='touch'>
        <Hero isFullHeight style={styles.background} />
      </Column>
    </Columns>
  );
}
