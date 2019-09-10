import Master from '../components/Master';
import Home from '../components/Home';
import '../styles.scss';
import api from '../utils/api';
import { auth } from '../utils/auth';

export default function Index(props) {
    return (
        <Master>
            <Home data={props} />
        </Master>
    );
}

Index.getInitialProps = async function(ctx) {
    auth(ctx);
    const { data } = await api.get('/user/profile')
    return { user: data.profile };
}