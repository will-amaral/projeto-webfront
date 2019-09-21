import { withAuth } from '../../utils/auth';
import { useRouter } from 'next/router';
import PerfilProfessor from '../../components/PerfilProfessor';

function Professor() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <PerfilProfessor id={id} />
    )
}

export default withAuth(Professor);