import { withAuth } from '../utils/auth';

function Ajuda() {
    return (
        <h1>Ajuda</h1>
    )
}

export default withAuth(Ajuda);