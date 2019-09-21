import { Modal, ModalBackground, ModalContent, ModalClose, Box } from 'bloomer';

export default function ModalContainer({ active, close, children }) {
    return (
        <Modal isActive={active}>
            <ModalBackground onClick={close} />
            <ModalContent >
                <Box >
                    {children}
                </Box>
            </ModalContent>
            <ModalClose onClick={close} />
        </Modal>
    )
}