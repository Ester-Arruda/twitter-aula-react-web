import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { FeedPage } from "./pages/FeedPage";
import { HomePage } from "./pages/HomePage";
import { SignUpPage } from "./pages/SignUpPage";
import { SignInPage } from "./pages/SignInPage";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/criar-conta" element={<SignUpPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/entrar" element={<SignInPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
