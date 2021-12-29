import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { UserProvider } from "./hooks/userContext";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <> 
    <UserProvider>
      <Header/>
      <Outlet/>
      <GlobalStyle />
    </UserProvider>
    </>
  );
}