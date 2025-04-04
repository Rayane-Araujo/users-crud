import styled from "styled-components";


export const HeaderContainer = styled.header`
  width: 100%;
  background-color: white;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
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
`;

export const ArrowIconWrapper = styled.div`
  position: absolute;
  top: 1.2em;
  right: -5px;
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
  color: #6b7280;
`;

export const Logout = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid #e5e7eb;
  color: #0D1931;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #AACBC4;
  }
`;