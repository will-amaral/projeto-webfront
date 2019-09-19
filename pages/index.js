import Dashboard from '../components/Dashboard';
import api from '../utils/api';
import { withAuth } from '../utils/auth';

function Index({ user }) {
    return (
        <Dashboard profile={user}/>
    );
}

Index.getInitialProps = async function(ctx) {
    try {
        const { data } = await api.get('/user/profile');
        return { user: data.profile };
    } catch (error) {
        console.log('Erro de requisição')
    }
}

export default withAuth(Index);


