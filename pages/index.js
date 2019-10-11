import Dashboard from '../components/Dashboard';
import { fetchUsers } from '../actions';
import { withAuth } from '../utils/auth';

function Index() {
  return <Dashboard profile={{ name: 'Willian Amaral' }} />;
}

Index.getInitialProps = async function({ reduxStore }) {
  reduxStore.dispatch(fetchUsers());
};

export default withAuth(Index);
