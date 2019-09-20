import { withAuth } from '../../utils/auth';
import ProfessoresDashboard from '../../components/Professores';

function Professores() {
    return (
        <ProfessoresDashboard />
    )
}

export default withAuth(Professores);