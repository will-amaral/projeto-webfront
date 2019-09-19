import { withAuth } from '../utils/auth';

function Alunos() {
    return (
        <h1>Alunos</h1>
    )
}

export default withAuth(Alunos);