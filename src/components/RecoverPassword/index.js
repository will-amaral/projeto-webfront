import React, { useState } from 'react';
import { Title, Subtitle, Columns, Image } from 'bloomer';
import Container from '../BoldContainer';
import CustomNotification from '../CustomNotification';
import Form from './Form';
import styles from '../styles';
import Logo from '../../img/logo-white.png';

export default function RecoverPassword() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setColor('danger');
    return;
  }
  return (
    <Container>
      <Image style={styles.logo} src={Logo} />
      <Title>Recuperar Senha</Title>
      <Subtitle>
        Entre seu e-mail abaixo e enviaremos um link de recuperação de senha
      </Subtitle>
      <CustomNotification
        message={message}
        color={color}
        close={() => setMessage('')}
      />
      <Columns isCentered>
        <Form loading={loading} handleSubmit={handleSubmit} />
      </Columns>
    </Container>
  );
}
