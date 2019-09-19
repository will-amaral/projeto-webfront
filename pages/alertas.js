import { withAuth } from '../utils/auth';

function Alertas() {
    return (
        <h1>Alertas</h1>
    )
}

export default withAuth(Alertas);