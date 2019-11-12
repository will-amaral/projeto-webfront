import React from 'react';
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
import styles from '../styles';
import { signIn } from '../../actions';

export default function Login() {
  const auth = useSelector(state => state.auth);
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();

  async function handleSubmit(event, email, password) {
    event.preventDefault();
    dispatch(signIn(email, password));
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
              <CustomNotification />
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
