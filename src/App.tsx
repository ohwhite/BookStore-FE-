import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import { ThemeName, getTheme } from "./style/theme";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { useContext, useState } from "react";
import { ThemeContext } from "./context/themeContext";
import { BookStoreThemeProvider } from "./context/themeContext";

function App() {


  return (
    <BookStoreThemeProvider>
    
    <ThemeSwitcher/>
    <Layout>
      <Home/>
    </Layout>
    </BookStoreThemeProvider>
  );
}

export default App;
