import { withAuth } from '../utils/auth';

function Conta() {
    return (
        <h1>Conta</h1>
    )
}

export default withAuth(Conta);