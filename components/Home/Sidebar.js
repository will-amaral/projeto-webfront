import { Menu, MenuLabel, MenuList, MenuLink } from 'bloomer';

export default function Sidebar() {
    return (
        <Menu isHidden="mobile">
            <MenuLabel>Geral</MenuLabel>
            <MenuList>
                <MenuLink isActive>Dashboard</MenuLink>
                <MenuLink>Alunos</MenuLink>
            </MenuList>
            <MenuLabel>Administração</MenuLabel>
            <MenuList>
                <MenuLink>Aulas</MenuLink>
                <MenuLink>Exercícios</MenuLink>
                <MenuList>
                    <MenuLink>Anaeróbicos</MenuLink>
                    <MenuLink>Aeróbiocs</MenuLink>
                    <MenuLink>Hipertróficos</MenuLink>
                </MenuList>
                <MenuLink>Calendário</MenuLink>
                <MenuLink>Alertas</MenuLink>
            </MenuList>
            <MenuLabel>Configurações</MenuLabel>
            <MenuList>
                <MenuLink>Meu perfil</MenuLink>
                <MenuLink>Minha conta</MenuLink>
                <MenuLink>Ajuda</MenuLink>
            </MenuList>
        </Menu>
    );
}