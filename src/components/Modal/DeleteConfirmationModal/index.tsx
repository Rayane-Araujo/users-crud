import {
  ModalOverlay,
  ModalContainer,
  ModalTitle,
  ModalMessage,
  ModalActions,
  DeleteButton,
  CancelButton,
} from "./styles";

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  userName: string;
}

const DeleteConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
}: DeleteConfirmationModalProps) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalTitle>Deseja excluir?</ModalTitle>
        <ModalMessage>
          O usuário será excluído.
        </ModalMessage>
        <ModalActions>
          <CancelButton onClick={onClose}>Não</CancelButton>
          <DeleteButton
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            Sim 
          </DeleteButton>
        </ModalActions>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default DeleteConfirmationModal;
