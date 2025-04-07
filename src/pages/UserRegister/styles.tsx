import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
  padding: 24px;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
`;

export const HeaderUsers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MiniHeader = styled.div`
  margin-top: 3rem;
`;

export const HeaderTitle = styled.div`
  display: flex;

  img {
    cursor: pointer;
    transition: 0.2s ease;
    border-radius: 50%;
    padding: 4px;

    &:hover {
      background-color: #00000029; 
      transform: scale(1.05);
    }
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #0d1931;
  margin-left: 12px;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
`;

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  padding: 24px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Legend = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #0b2b25;
  font-size: 14px;
`;

export const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Input = styled.input`
  padding: 12px;
  background-color: #f4f4f4;
  border: none;
  border-bottom: 2px solid transparent;
  border-radius: 8px 8px 0 0;
  font-size: 14px;
  outline: none;
  width: 400px;
  transition: border-bottom-color 0.3s ease;

  &:focus {
    border-bottom-color: #0290a4;
    background-color: #ffffff;
  }

  &::placeholder {
    color: #0b2b25;
  }
`;


export const LabelSection = styled.div`
  hr {
    margin-top: 4px;
  }
`;

export const ErrorMessage = styled.span`
  color: #d32f2f;
  font-size: 12px;
  margin-top: 4px;
  display: block;
`;

export const ActionsForm = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 16px;
`;

export const Button = styled.button<{
    $outline?: boolean;
    $enabled?: boolean;
  }>`
    width: 20px;
    height: 50px;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s ease all;
    min-width: 180px;
  
    ${({ $outline }) =>
      $outline
        ? `
      background-color: #ffffff;
      border: 1px solid #002f23;
      color: #002f23;
  
      &:hover {
        background-color: #f3f3f3;
      }
    `
        : `
      background-color: #e0e0e0;
      color: #9e9e9e;
      border: none;
    `}
  
    ${({ $enabled }) =>
      $enabled &&
      `
      background-color: #0290A4;
      color: #ffffff;
  
      &:hover {
        background-color: #027c8c;
      }
    `}
`;
  
  

export const TogglePassword = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;

  img {
    width: 20px;
    height: 20px;
  }
`;
