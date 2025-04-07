import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(10, 10, 10, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  padding: 32px;
  border-radius: 12px;
  width: 100%;
  max-width: 420px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 20px;
  color: #0d1931;
  margin-bottom: 8px;
`;

export const Message = styled.p`
  font-size: 14px;
  color: #5f5f5f;
  margin-bottom: 24px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const ModalButton = styled.button<{
  $outline?: boolean;
  $confirm?: boolean;
}>`
  min-width: 120px;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease all;
  border: none;

  ${({ $outline }) =>
    $outline &&
    `
    background-color: #ffffff;
    border: 1px solid #002f23;
    color: #002f23;

    &:hover {
      background-color: #f5f5f5;
    }
  `}

  ${({ $confirm }) =>
    $confirm &&
    `
    background-color: #0290A4;
    color: #ffffff;

    &:hover {
      background-color: #027c8c;
    }
  `}
`;
