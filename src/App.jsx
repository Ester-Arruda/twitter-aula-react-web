import "./App.css";
import { Layout } from "./layout/Layout";
import { FeedPage } from "./pages/FeedPage";
import { HomePage } from "./pages/HomePage";
import { SignUpPage } from "./pages/SignUpPage";
import { SignInPage } from "./pages/SignInPage";

function App() {
  return (
    <Layout>
      <SignUpPage />
    </Layout>
  );
}

export default App;
