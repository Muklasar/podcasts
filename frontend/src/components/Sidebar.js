import styled from "styled-components";
import {
  HomeRounded,
  CloseRounded,
  Dashboard,
  SearchRounded,
  FavoriteRounded,
  UploadFileRounded,
  UploadRounded,
  LightModeRounded,
  LogoutRounded,
  DarkModeRounded,
  CloudUploadRounded,
} from "@mui/icons-material";
import LogoImage from "../Images/Logo.png";
import { Link } from "react-router-dom";

const MenuContainer = styled.div`
  display: flex;
  flex: 0.5;
  flex-direction: column;
  height: 100vh;
  max-width: 250px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 1100px) {
    position: fixed;
    z-index: 1000;
    width: 100%;
    max-width: 250px;
    left: ${({ menuOpen }) => (menuOpen ? "0" : "-100%")};
    transition: 0.3s ease-in-out;
  }
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
`;
const Logo = styled.div`
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-weight: bold;
  font-size: 20px;
  margin: 16px 0px;
`;
const Image = styled.img`
  height: 40px;
`;
const Close = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 1100px) {
    display: block;
  }
`;

const Elements = styled.div`
  padding: 4px 6px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
  widht: 100%;
  text-decoration: none !important;
  &:hover {
    background-color: ${({ theme }) => theme.text_secondary};
  }
`;
const NavText = styled.div`
  padding: 12px 0;
  text-decoration: none !important;
`;

const HR = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.text_secondary};
  margin: 10px 0;
`;

const menuItems = [
  {
    link: "/",
    name: "Dashboard",
    icons: <HomeRounded />,
  },
  {
    link: "/search",
    name: "Search",
    icons: <SearchRounded />,
  },
  {
    link: "/favourite",
    name: "Favourite",
    icons: <FavoriteRounded />,
  },
];

const buttons = [
  {
    fun: () => {
      console.log("Upload");
    },
    name: "Upload",
    icons: <CloudUploadRounded />,
  },
  {
    fun: () => {
      console.log("Upload");
    },
    name: "LightMode",
    icons: <LightModeRounded />,
  },
  {
    fun: () => {
      console.log("Upload");
    },
    name: "Logout",
    icons: <LogoutRounded />,
  },
];

const Sidebar = ({ setMenuOpen, setDarkMode, darkMode, menuOpen }) => {
  const buttons = [
    {
      fun: () => {
        console.log("Upload");
      },
      name: "Upload",
      icons: <UploadRounded />,
    },
    {
      fun: () => {
        setDarkMode(!darkMode);
      },
      name: darkMode ? "LightMode" : "DarkMode",
      icons: darkMode ? <LightModeRounded /> : <DarkModeRounded />,
    },
    {
      fun: () => {
        console.log("Upload");
      },
      name: "Logout",
      icons: <LogoutRounded />,
    },
  ];

  return (
    <MenuContainer menuOpen={menuOpen}>
      <Flex>
        <Logo>
          <Image src={LogoImage} />
          Podcasts
        </Logo>
        <Close onClick={() => setMenuOpen(false)}>
          <CloseRounded />
        </Close>
      </Flex>
      {menuItems.map((item, index) => (
        <Link to={item.link} key={index} style={{ textDecoration: "none" }}>
          <Elements key={item.name}>
            {item.icons}
            <NavText>{item.name}</NavText>
          </Elements>
        </Link>
      ))}
      <HR />
      {buttons.map((item, index) => (
        <Elements key={index} onClick={item.fun}>
          {item.icons}
          <NavText>{item.name}</NavText>
        </Elements>
      ))}
    </MenuContainer>
  );
};

export default Sidebar;
