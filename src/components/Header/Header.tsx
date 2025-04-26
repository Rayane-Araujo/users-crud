import { useState, useEffect, useRef } from "react";
import { FiLogOut } from "react-icons/fi";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
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

import { UserData } from "../../types/user";
import profileImg from "../../assets/profile-picture.png";


const user: UserData = {
  nome: "Milena Santana Borges",
  email: "milena.santana@energy.org.br",
  avatar: profileImg,
  id: undefined
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <HeaderContainer>
      <ProfileWrapper ref={dropdownRef} onClick={() => setOpen((prev) => !prev)}>
        <ProfileImage src={user.avatar} alt="Profile picture" />
        <ArrowIconWrapper>
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </ArrowIconWrapper>

        {open && (
          <DropdownCard>
            <UserInfo>
              <ProfileImage src={user.avatar} alt="Profile picture" />
              <InfoText>
                <Name>{user.nome}</Name>
                <Email>{user.email}</Email>
              </InfoText>
            </UserInfo>
            <Logout>
              <FiLogOut size={18} fontWeight={700}/>
              Sair
            </Logout>
          </DropdownCard>
        )}
      </ProfileWrapper>
    </HeaderContainer>
  );
}

export default Header;
