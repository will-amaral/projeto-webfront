import { withAuth } from '../utils/auth';

function Mensagens() {
    return (
        <h1>Mensagens</h1>
    )
}

export default withAuth(Mensagens);