import { Navbar, NavbarBrand, Image,
    NavbarItem, NavbarMenu, Container,
    Icon, NavbarEnd, Button
} from 'bloomer';

export default function Header({ handleLogout }) { 
    return (
        <Navbar>
            <Container>
                <NavbarBrand>
                    <NavbarItem>
                        <Image isSize='24x24' src='/static/img/logo.png' />
                    </NavbarItem>
                    <NavbarItem style={{fontWeight: 300}}>Gym App</NavbarItem>
                </NavbarBrand>
                <NavbarMenu>
                    <NavbarEnd>
                        <NavbarItem>
                            <Button isOutlined isColor='primary' onClick={handleLogout}>
                            <Icon isSize='small' className='fas fa-sign-out-alt'/>
                            <span>Sair</span>
                            </Button>
                        </NavbarItem>
                    </NavbarEnd>
                </NavbarMenu>
            </Container>
        </Navbar>
    );
}