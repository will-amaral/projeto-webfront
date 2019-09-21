import { Menu, MenuLabel, MenuList } from 'bloomer';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { routes } from './routes';

export default function Sidebar() {
    const { geral, admin, config } = routes;
    const router = useRouter();

    function isActive(path) {
        console.log(router.pathname)
        if (path === router.pathname || path + '/[id]' === router.pathname) {
            return true;
        } else {
            return false
        }
    }

    function mapRoutes(route) {
        return route.map(({ key, path, name }) => {
            if (isActive(path)) {
                return <Link href={path} key={key}><a className='is-active'>{name}</a></Link>
            } else {
                return <Link href={path} key={key}><a>{name}</a></Link>
            }
        });
    }

    return (
        <Menu>
            <MenuLabel>Geral</MenuLabel>
            <MenuList>
                {mapRoutes(geral)}
            </MenuList>
            <MenuLabel>Administração</MenuLabel>
            <MenuList>
                {mapRoutes(admin)}
            </MenuList>
            <MenuLabel>Configurações</MenuLabel>
            <MenuList>
                {mapRoutes(config)}
            </MenuList>
        </Menu>
    );
}