import "./App.css";
import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import { configure } from "axios-hooks";
import { axios } from "./axios";
import { Layout } from "./layout/Layout";
import { FeedPage } from "./pages/FeedPage";
import { HomePage } from "./pages/HomePage";
import { SignUpPage } from "./pages/SignUpPage";
import { SignInPage } from "./pages/SignInPage";
import { ProfilePage } from "./pages/ProfilePage";
import { UserPage } from "./pages/UserPage";
import { LoadSession } from "./LoadSession";
import { history } from "./history";

configure({ axios });

function App() {
  return (
    <HistoryRouter history={history}>
      <LoadSession />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/criar-conta" element={<SignUpPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/entrar" element={<SignInPage />} />
          <Route path="/u/:username" element={<ProfilePage />} />
          <Route path="/usuario" element={<UserPage />} />
        </Routes>
      </Layout>
    </HistoryRouter>
  );
}

export default App;
