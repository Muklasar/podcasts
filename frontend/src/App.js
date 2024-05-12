import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes";
import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar";

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3 !important;
`;

const Container = styled.div`
  background: ${({ theme }) => theme.bgLight};
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Sidebar
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          setDarkMode={setDarkMode}
          darkMode={darkMode}
        />
        <Frame>
          <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <div>Podcasts</div>
        </Frame>
      </Container>
    </ThemeProvider>
  );
}

export default App;
