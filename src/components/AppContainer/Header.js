import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Image,
  NavbarItem,
  NavbarMenu,
  Container,
  Icon,
  NavbarEnd,
  Button
} from 'bloomer';
import { signOut } from '../../actions';
import Logo from '../../img/logo.png';

export default function Header() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  if (auth === false) return <Redirect to='/login' />;

  return (
    <Navbar>
      <Container>
        <NavbarBrand>
          <NavbarItem>
            <Image isSize='24x24' src={Logo} />
          </NavbarItem>
          <NavbarItem style={{ fontWeight: 300 }}>Gym App</NavbarItem>
        </NavbarBrand>
        <NavbarMenu>
          <NavbarEnd>
            <NavbarItem>
              <Button isOutlined isColor='primary' onClick={handleLogout}>
                <Icon isSize='small' className='fas fa-sign-out-alt' />
                <span>Sair</span>
              </Button>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Container>
    </Navbar>
  );
}
