import ModalContainer from '../ModalContainer';

export default function AddAluno({ active, close }) {
    return (
        <ModalContainer active={active} close={close}>
            <h1>Formulário para adicionar aluno</h1>
        </ModalContainer>
    )
}