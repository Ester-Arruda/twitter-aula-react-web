import { GiBirdTwitter } from "react-icons/gi";
import { Link } from "react-router-dom";
import { LinkButton } from "../components/LinkButton";

export function AppBar() {
  return (
    <header className="flex border-b p-4 items-center justify-between">
      <div>
        <Link
          to="/"
          className="flex items-center gap-1 text-purple-900 hover:text-orange-500"
        >
          <GiBirdTwitter size="36px" />
          <span className="text-2xl font-bold">Paçaro</span>
        </Link>
      </div>
      <div className="flex gap-2">
        <LinkButton to="/entrar">Entrar</LinkButton>
        <LinkButton to="/criar-conta">Criar conta</LinkButton>
      </div>
    </header>
  );
}
