import { withAuth } from '../utils/auth';

function Financeiro() {
    return (
        <h1>Financeiro</h1>
    )
}

export default withAuth(Financeiro);