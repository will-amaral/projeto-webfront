import { Container, Columns, Column } from 'bloomer';
import Header from './Header';
import Sidebar from './Sidebar';
import { logout } from '../../utils/auth';

export default function AppContainer({ children }) {
  return (
    <>
      <Header handleLogout={() => logout()} />
      <Container style={{ marginTop: 15 }}>
        <Columns>
          <Column isSize={3}>
            <Sidebar />
          </Column>
          {children}
        </Columns>
      </Container>
    </>
  );
}
