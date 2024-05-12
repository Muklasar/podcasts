import { PersonRounded, Menu } from "@mui/icons-material";
import styled from "styled-components";

const NavBarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  color: ${({ theme }) => theme.text_primary};
  gap: 30px;
  background-color: ${({ theme }) => theme.bgLight};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.5px);
  -webkit-backdrop-filter: blur(7.5px);
`;

const ButtonDiv = styled.div`
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  max-width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 1px solid ${({theme})=>theme.primary};
  color: ${({theme})=>theme.primary};
  border-radius: 12px;
  padding: 8px 10px;
`;

const NavBar = ({ menuOpen, setMenuOpen }) => {
  return (
    <NavBarDiv>
      <Menu onClick={(()=>setMenuOpen(true))}/>
      <ButtonDiv>
        <PersonRounded />
        Login
      </ButtonDiv>
    </NavBarDiv>
  );
};

export default NavBar;
