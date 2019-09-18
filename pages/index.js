import Dashboard from '../components/Dashboard';
import api, { setHeader } from '../utils/api';
import { auth } from '../utils/auth';

export default function Index(props) {
    return (
        <Dashboard profile={props.user}/>
    );
}

Index.getInitialProps = async function(ctx) {
    const token = auth(ctx);
    setHeader(token);
    try {
        const { data } = await api.get('/user/profile');
        return { user: data.profile };
    } catch (error) {
        console.log('Erro de requisição')
    }
}