import React, { useState } from 'react';
import { Title, Subtitle, Columns, Section, Container } from 'bloomer';
import CustomNotification from '../CustomNotification';
import Form from './Form';

export default function Signup() {
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSignup() {
    return;
  }

  return (
    <Container hasTextAlign='centered'>
      <Section>
        <Title>Criar novo usuário</Title>
        <Subtitle>Entre os dados abaixo para criar uma nova conta</Subtitle>
        <CustomNotification
          message={message}
          color={color}
          close={() => setMessage('')}
        />
      </Section>
      <Section>
        <Columns isCentered>
          <Form loading={loading} handleSignup={handleSignup} />
        </Columns>
      </Section>
    </Container>
  );
}
