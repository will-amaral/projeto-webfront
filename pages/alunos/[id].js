import { useRouter } from 'next/router';
import PerfilAluno from '../../components/PerfilAluno';
import { withAuth } from '../../utils/auth';

function Aluno() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <PerfilAluno id={id} />
    )
}

export default withAuth(Aluno);