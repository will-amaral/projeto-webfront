import React from 'react';
import { Hero, HeroBody, Container } from 'bloomer';
import styles from './styles';

export default function BoldContainer({ children }) {
  return (
    <Hero isColor='primary' isFullHeight style={styles.gradient}>
      <HeroBody>
        <Container hasTextAlign='centered'>{children}</Container>
      </HeroBody>
    </Hero>
  );
}
