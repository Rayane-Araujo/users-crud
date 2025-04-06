import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   min-height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 100vh;
  justify-content: space-between;
`;

export const HeaderUsers = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  margin-top: 10%;
`;

export const Title = styled.h2`
   font-size: 24px;
   color: #0d1931;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

export const SearchContainer = styled.div`
  position: relative;
  margin-top: 12px;

  img {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
  }
`;

export const SearchInput = styled.input`
  padding: 8px 12px 8px 32px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  width: 200px;
  outline: none;
  height: 40px;
  font-size: 14px;
`;

export const AddButton = styled.button`
  background-color: #00AAC1;
  color: #ffffff;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 40px;
  gap: 8px;

  img {
    width: 16px;
    height: 16px;
  }

  &:hover {
    background-color: #008fa3;
  }
`;

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
  padding: 24px;
  flex: 1;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  max-height: 500px;
  overflow-y: auto;
`;

export const EmptyState = styled.div`
  text-align: center;

  h3 {
    color: #0D1931;
    font-size: 16px;
    margin-bottom: 8px;
  }

  p {
    color: #6b7280;
    font-size: 14px;
  }
`;

export const Footer = styled.div`
  margin-top: auto;
  margin-bottom: 16px;
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #4b5563;
  border-radius: 0 0 8px 8px;
`;

export const FooterLeft = styled.div`
    color: #0D1931;
`;

export const FooterRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    color: #0D1931;

    strong {
      margin-left: 4px;
      font-weight: 600;
      color: #0D1931;
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
    font-weight: 500;

    svg {
      color: #0B2B2679;
    }

    &.active {
      background-color: #00AAC1;
      color: white;
    }
  }

  span {
    margin-left: 8px;
  }
`;
