import { withAuth } from '../../utils/auth';
import AlunosDashboard from '../../components/Alunos';

function Alunos() {
    return (    
        <AlunosDashboard />  
    )
}

export default withAuth(Alunos);