import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import MainPage from "./pages/MainPage";
import WritePage from "./pages/WritePage";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/write" element={<WritePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
