import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


import logoFull from "../../assets/logoFull.svg";
import logoMini from "../../assets/logoMini.svg";
import HomeIcon from "../../assets/home-icon.svg";
import ProfileIconFilled from "../../assets/profile-icon-filled.svg";
import Users from "../../assets/users.svg";
import {
  SidebarContainer,
  ToggleButton,
  Logo,
  Menu,
  MenuItem,
  MenuText,
  SubMenu,
  Footer
} from "./styles";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [accessOpen, setAccessOpen] = useState(false);

  return (
    <SidebarContainer isOpen={isOpen}>
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </ToggleButton>
      <Logo   isOpen={isOpen} />
       <img src={isOpen ? logoFull : logoMini} alt="logo" />
      <Menu>
        <MenuItem isOpen={isOpen} hoverable active>
        <img src={HomeIcon} alt="Home icon" /> <MenuText isOpen={isOpen}>Home</MenuText>
        </MenuItem>
        <MenuItem isOpen={isOpen} hoverable accessToggle onClick={() => setAccessOpen(!accessOpen)}>
          <img src={ProfileIconFilled} alt="Profile icon" /> <MenuText isOpen={isOpen}>Controle de Acesso</MenuText>
          {isOpen && (accessOpen ? <FaAngleUp style={{ marginLeft: "auto" }} /> : <FaAngleDown style={{ marginLeft: "auto" }} />)}
        </MenuItem>
        <SubMenu isOpen={accessOpen}>
          <MenuItem isOpen={isOpen} hoverable active>
            <img src={Users} alt="Users icon" /> <MenuText isOpen={isOpen}>Usuários</MenuText>
          </MenuItem>
        </SubMenu>
      </Menu>
      <Footer isOpen={isOpen}>
        <div>
          <div>© WenLock</div>
          <div>Power by Conecthus</div>
          <div>V.0.0.0</div>
        </div>
        <span>V.0.0.0</span>
      </Footer>
    </SidebarContainer>
  );
};

export default Sidebar;