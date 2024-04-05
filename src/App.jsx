import "./App.css";
import {
  unstable_HistoryRouter as HistoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import { configure } from "axios-hooks";
import { axios } from "./axios";
import { Layout } from "./layout/Layout";
import { HomePage } from "./pages/HomePage";
import { SignUpPage } from "./pages/SignUpPage";
import { SignInPage } from "./pages/SignInPage";
import { EditProfilePage } from "./pages/EditProfileRoute";
import { ProfilePage } from "./pages/ProfilePage";
import { UserViewPage } from "./pages/UserViewPage";

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
          <Route path="/entrar" element={<SignInPage />} />
          <Route path="/editar-perfil" element={<EditProfilePage />} />
          <Route path="/u/:username" element={<UserViewPage />} />
          <Route path="/perfil" element={<ProfilePage />} />
        </Routes>
      </Layout>
    </HistoryRouter>
  );
}

export default App;
