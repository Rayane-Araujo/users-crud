import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  padding: 32px;
  border-radius: 12px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #081735;
  margin-bottom: 16px;
`;

export const ModalMessage = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 24px;

  strong {
    color: #e63946;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 12px;
`;

export const DeleteButton = styled.button`
  background-color: #0290A4;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  flex: 1;


  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const CancelButton = styled.button`
  background-color: #fff;
  color: #0B2B25;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 500;
  border: 1px solid #0B2B25;
  cursor: pointer;
  transition: background-color 0.3s ease;
  flex: 1;
`;
