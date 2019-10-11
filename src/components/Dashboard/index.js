import React from 'react';
import { Columns, Column, Hero, HeroBody, Title, Subtitle } from 'bloomer';
import Tiles from './Tiles';
import CardContainer from '../CardContainer';
import SimpleInput from '../SimpleInput';
import Activity from './Activity';
import styles from '../styles';

export default function Dashboard() {
  return (
    <Column>
      <Hero isColor='primary' isSize='small' style={styles.gradient}>
        <HeroBody>
          <Title>Olá, Willian Amaral</Title>
          <Subtitle>Tenha um ótimo dia!</Subtitle>
        </HeroBody>
      </Hero>
      <Tiles />
      <Columns>
        <Column isSize={6}>
          <CardContainer title='Feed de Atividades'>
            <Activity />
            <Activity />
            <Activity />
          </CardContainer>
        </Column>
        <Column isSize={6}>
          <SimpleInput />
          <CardContainer title='Progressão Mensal'></CardContainer>
        </Column>
      </Columns>
    </Column>
  );
}
