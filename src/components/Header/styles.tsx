import styled from "styled-components";


export const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
`;

export const ProfileWrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-block;
`;


export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover; 
  background-color: #193B59;
  border: 2px solid #00AAC1;
  font-size: 14px;
`;

export const ArrowIconWrapper = styled.div`
  position: absolute;
  bottom: -4px;
  right: -4px;
  background-color: white;
  border-radius: 50%;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  svg {
    font-size: 14px;
    color: #969696;
  }
`;

export const DropdownCard = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  width: 250px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  z-index: 100;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #00AAC1;
`;

export const Email = styled.p`
  font-size: 12px;
  color: #0B2B2679;
`;

export const Logout = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid #e5e7eb;
  height: 35px;
  border-radius: 5px;
  color: #0D1931;
  cursor: pointer;

  &:hover {
    background-color: #AACBC4;
  }
`;