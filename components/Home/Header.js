import { Navbar, NavbarBrand, NavbarBurger,
    NavbarItem, NavbarMenu, Container,
    NavbarStart, NavbarEnd, Button 
} from 'bloomer';

export default function Header({ handleLogout }) { 
    const toggleMenu = () => {
        document.querySelector('.navbar-burger').classList.toggle('is-active');
        document.querySelector('#navMenu').classList.toggle('is-active');
    }
    return (
        <Navbar>
            <Container>
                <NavbarBrand>
                    <NavbarItem style={{fontWeight: 300}}>Gym App</NavbarItem>
                    <NavbarBurger onClick={toggleMenu}>
                        <span />
                        <span />
                        <span />
                        <span />
                    </NavbarBurger>
                </NavbarBrand>
                <NavbarMenu id="navMenu">
                    <NavbarStart>
                        <NavbarItem>Home</NavbarItem>
                        <NavbarItem>Perfil</NavbarItem>
                        <NavbarItem>Alunos</NavbarItem>
                        <NavbarItem>Professores</NavbarItem>
                    </NavbarStart>
                    <NavbarEnd>
                        <NavbarItem><Button isOutlined isColor='primary' onClick={handleLogout}>Sair</Button></NavbarItem>
                    </NavbarEnd>
                </NavbarMenu>
            </Container>
        </Navbar>
    );
}