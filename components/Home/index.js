import { Container, Columns, Column } from 'bloomer';

import Header from './Header';
import Sidebar from './Sidebar';
import MainArea from './MainArea';
import { logout } from '../../utils/auth';

export default function Home({ data: { user } }) {

    return (
        <>
            <Header handleLogout={() => logout()} />
            <Container style={{ marginTop: 15 }}>
                <Columns>
                    <Column isSize={3}>
                        <Sidebar />
                    </Column>
                    <MainArea profile={user} />
                </Columns>
            </Container>
        </>
    )
}