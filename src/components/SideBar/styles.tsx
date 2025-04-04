import styled, { css } from "styled-components";


interface ToggleProps {
  isOpen: boolean;
}

interface ActiveProps {
  active?: boolean;
  hoverable?: boolean;
  accessToggle?: boolean;
}

export const SidebarContainer = styled.nav<ToggleProps>`
  width: ${(props) => (props.isOpen ? "250px" : "80px")};
  height: 100vh;
  background-color: #0D1931;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  transition: width 0.3s;
  position: relative;
`;

export const ToggleButton = styled.div`
  position: absolute;
  top: 20px;
  right: -15px;
  background-color: #F2F2F2;
  color: #808080;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
`;

export const Logo = styled.img<ToggleProps>`
  width: 100%;
  max-width: ${(props) => (props.isOpen ? "150px" : "50px")};
  transition: max-width 0.3s;
  margin-bottom: 20px;
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  flex-grow: 1;
  margin-top: 2rem;
`;

export const MenuItem = styled.li<ActiveProps & ToggleProps>`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 13px;
  padding: 10px;
  border-radius: 5px;
  color: ${(props) => (props.active ? "#0D1931" : "white")};

  ${(props) =>
    props.hoverable &&
    (!props.accessToggle || (props.accessToggle && !props.isOpen)) &&
    css`
      &:hover {
        background-color: #0290A4;
      }
    `}

  ${(props) =>
    props.active &&
    css`
      background-color: #00AAC1;
    `}
`;

export const MenuItemImg = styled.img`
  color: #fff;
`;

export const MenuText = styled.span<ToggleProps & ActiveProps>`
  display: ${(props) => (props.isOpen ? "inline" : "none")};
  margin-left: 10px;
  transition: display 0.3s;
  color: ${(props) => (props.active ? "#0D1931" : "white")};
`;

export const SubMenu = styled.ul<ToggleProps>`
  list-style: none;
  padding-left: 20px;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const Footer = styled.div<ToggleProps>`
  font-size: 12px;
  color: #aaa;
  text-align: center;
  margin-top: auto;
  
  div {
    display: ${(props) => (props.isOpen ? "block" : "none")};
  }

  span {
    display: ${(props) => (props.isOpen ? "none" : "block")};
  }
`;


export const IconWrapper = styled.div<ActiveProps>`
  svg {
    fill: ${(props) => (props.active ? "#0D1931" : "#ffffff")};
    width: 20px;
    height: 20px;
  }
`;



