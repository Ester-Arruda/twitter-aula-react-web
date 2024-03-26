import { GiBirdTwitter } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { LinkButton } from "../components/LinkButton";
import { Button } from "../components/Button";
import { useGlobalStore } from "../useGlobalStore";
import toast from "react-simple-toasts";
import { AuthService } from "../auth.service";

export function AppBar() {
  const isAuthenticated = useGlobalStore((state) => state.isAuthenticated);
  const currentArea = isAuthenticated ? <UserArea /> : <AnonArea />;

  return (
    <header className="flex border-b p-4 items-center justify-between bg-white">
      <div>
        <Link
          to="/"
          className="flex items-center gap-1 text-purple-900 hover:text-orange-500"
        >
          <GiBirdTwitter size="36px" />
          <span className="text-2xl font-bold">Paçaro</span>
        </Link>
      </div>
      {currentArea}
    </header>
  );
}

function UserArea() {
  const navigate = useNavigate();
  const user = useGlobalStore((state) => state.user);
  const setIsAuthenticated = useGlobalStore(
    (state) => state.setIsAuthenticated
  );
  const cleanUser = useGlobalStore((state) => state.cleanUser);

  function onClickLogout() {
    AuthService.removeToken();
    setIsAuthenticated(false);
    cleanUser();
    toast("Você saiu da sua conta");
    navigate("/");
  }

  return (
    <div className="flex gap-4 items-center">
      <Link
        to="/usuario"
        title="Ir para a tela de perfil"
        className="flex gap-2 items-center"
      >
        <img
          src={user.avatar ?? "/anon.png"}
          alt=""
          className="w-[36px] h-[36px] rounded-full"
        />
        <span className="font-bold">
          {user.name} {user.surname}
        </span>
      </Link>
      <Button onClick={onClickLogout}>Sair</Button>
    </div>
  );
}

function AnonArea() {
  return (
    <div className="flex gap-2">
      <LinkButton to="/entrar">Entrar</LinkButton>
      <LinkButton to="/criar-conta">Criar conta</LinkButton>
    </div>
  );
}
