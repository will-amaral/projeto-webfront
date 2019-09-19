import { withAuth } from '../utils/auth';

function Exercicios() {
    return (
        <h1>Exercícios</h1>
    )
}

export default withAuth(Exercicios);