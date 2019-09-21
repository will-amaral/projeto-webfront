import ModalContainer from '../ModalContainer';

export default function AddProfessor({ active, close }) {
    return (
        <ModalContainer active={active} close={close}>
            <h1>Formulário para adicionar professor</h1>
        </ModalContainer>
    )
}