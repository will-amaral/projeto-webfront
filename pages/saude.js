import { withAuth } from '../utils/auth';

function Saude() {
    return (
        <h1>Saúde</h1>
    )
}

export default withAuth(Saude)