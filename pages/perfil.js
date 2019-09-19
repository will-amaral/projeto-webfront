import { withAuth } from '../utils/auth';

function Perfil() {
    return (
        <h1>Perfil</h1>
    )
}

export default withAuth(Perfil);