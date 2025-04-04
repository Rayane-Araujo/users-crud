import { useState } from "react";
import {
  HeaderContainer,
  ProfileWrapper,
  ProfileImage,
  ArrowIconWrapper,
  DropdownCard,
  UserInfo,
  InfoText,
  Name,
  Email,
  Logout,
} from "./styles";
import { FiLogOut } from "react-icons/fi";
import profileImg from "../../assets/profile-picture.png";
import ArrowUpFilled from "../../assets/arrow-up-filled.svg";
import { UserData } from "../../types/user";


const user: UserData = {
  name: "Milena Santana Borges",
  email: "email@dominio.com",
  avatar: profileImg,
};


const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderContainer>
      <ProfileWrapper
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((prev) => !prev)}
      >
        <ProfileImage src={user.avatar} alt="Profile picture" />
        <ArrowIconWrapper>
          {open ? (
            <img src={ArrowUpFilled} alt="Seta para cima"/>
          ) : (
            <img src={ArrowUpFilled} alt="Seta para cima" />
          )}
        </ArrowIconWrapper>

        {open && (
          <DropdownCard>
            <UserInfo>
              <ProfileImage src={user.avatar} alt="Profile picture" />
              <InfoText>
                <Name>{user.name}</Name>
                <Email>{user.email}</Email>
              </InfoText>
            </UserInfo>
            <Logout>
              <FiLogOut size={16} />
              Sair
            </Logout>
          </DropdownCard>
        )}
      </ProfileWrapper>
    </HeaderContainer>
  );
}

export default Header;
