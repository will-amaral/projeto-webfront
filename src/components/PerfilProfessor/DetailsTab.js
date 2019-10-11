import React from 'react';
import { Columns, Column, Title, Subtitle, Section, Button, Icon } from 'bloomer';
import { calculateAge } from '../../utils/helpers';
import styles from '../styles';

export default function DetailsTab({ user }) {
  const { email, phone, role, specialty, address, birthDate } = user;
  return (
    <Section>
      <Columns isMultiline>
        <Column isSize='1/2'>
          <Title isSize={6}>E-mail</Title>
          <Subtitle isSize={6}>{email}</Subtitle>
        </Column>
        <Column isSize='1/2'>
          <Title isSize={6}>Telefone</Title>
          <Subtitle isSize={6}>{phone}</Subtitle>
        </Column>
        <Column isSize='1/2'>
          <Title isSize={6}>Cargo</Title>
          <Subtitle isSize={6}>{role}</Subtitle>
        </Column>
        <Column isSize='1/2'>
          <Title isSize={6}>Especialização</Title>
          <Subtitle isSize={6}>{specialty}</Subtitle>
        </Column>
        <Column>
          <Title isSize={6}>Endereço</Title>
          <Subtitle isSize={6}>{address}</Subtitle>
        </Column>
        <Column>
          <Title isSize={6}>Idade</Title>
          <Subtitle isSize={6}>{calculateAge(new Date(birthDate))}</Subtitle>
        </Column>
      </Columns>
      <Columns>
        <Column hasTextAlign='right'>
          <div style={styles.separator} />
          <Button isColor='primary'>
            <Icon isSize='small' className='fa fa-envelope' />
            <span>Enviar Mensagem</span>
          </Button>
        </Column>
      </Columns>
    </Section>
  );
}
