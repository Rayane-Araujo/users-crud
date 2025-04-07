import { useNavigate } from "react-router-dom";
import { Overlay, ModalContainer, Title, Message, ButtonsWrapper, ModalButton } from "./style";
import { CancelConfirmationModalProps } from "../../../types/user";
import { toast } from 'react-toastify';

const CancelConfirmationModal = ({ isOpen, onClose }: CancelConfirmationModalProps) => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    toast.error("Cadastro cancelado!");
    onClose();

    setTimeout(() => {
      navigate('/usuarios');
    }, 100);
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalContainer>
        <Title>Deseja cancelar?</Title>
        <Message>Os dados inseridos não serão salvos</Message>
        <ButtonsWrapper>
          <ModalButton onClick={onClose} $outline>Não</ModalButton>
          <ModalButton onClick={handleConfirm} $confirm>Sim</ModalButton>
        </ButtonsWrapper>
      </ModalContainer>
    </Overlay>
  );
};

export default CancelConfirmationModal;
