import { withAuth } from '../utils/auth';

function Professores() {
    return (
        <h1>Professores</h1>
    )
}

export default withAuth(Professores);