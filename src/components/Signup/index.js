import React from 'react';
import { Title, Subtitle, Columns, Section, Container } from 'bloomer';
import CustomNotification from '../CustomNotification';
import Form from './Form';

export default function Signup({ extend }) {
  return (
    <Container hasTextAlign='centered'>
      <Section>
        <Title>Criar novo usuário</Title>
        <Subtitle>Entre os dados abaixo para criar uma nova conta</Subtitle>
        <CustomNotification />
      </Section>
      <Section>
        <Columns isCentered>
          <Form extend={extend} />
        </Columns>
      </Section>
    </Container>
  );
}
