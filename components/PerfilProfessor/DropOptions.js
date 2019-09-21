import { Dropdown, DropdownTrigger, DropdownMenu, 
    DropdownContent, DropdownItem, Icon, Button, DropdownDivider } from 'bloomer';

export default function DropOptions() {
    return (
        <Dropdown isHoverable>
            <DropdownTrigger>
                <Button isColor='primary'>
                    <Icon isSize='small' className='fa fa-user-edit' />
                    <span>Editar Professor</span>
                </Button>
            </DropdownTrigger>
            <DropdownMenu>
                <DropdownContent>
                    <DropdownItem href="#">
                        <Icon isSize='small' className='fa fa-edit' />
                        Editar Informações
                    </DropdownItem>
                    <DropdownDivider />
                    <DropdownItem href="#">
                        <Icon isSize='small' className='fa fa-trash' />
                        Excluir Usuário
                    </DropdownItem>
                    <DropdownDivider />
                    <DropdownItem href="#">
                        <Icon isSize='small' className='fa fa-share-alt' />
                        Compartilhar Perfil
                    </DropdownItem>
                </DropdownContent>
            </DropdownMenu>
        </Dropdown>
    )
}

