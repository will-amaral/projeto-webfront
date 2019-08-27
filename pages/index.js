import Master from '../components/Master';
import Home from '../components/Home';
import '../styles.scss';
import { gql } from 'apollo-boost';
import { api } from '../utils/auth';

export default function Index(props) {
    return (
        <Master>
            <Home data={props} />
        </Master>
    );
}

Index.getInitialProps = async function() {
    const result = await api.query({
                            query: gql`
                                {
                                    users {
                                        id
                                        name
                                        email
                                    }
                                }
                            `});
    return { user: result.data.users[0] };
}