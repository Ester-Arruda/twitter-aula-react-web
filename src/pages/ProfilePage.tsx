import { LinkButton } from "../components/LinkButton";
import { useGlobalStore } from "../useGlobalStore";

export function ProfilePage() {
  const user = useGlobalStore((state) => state.user);

  return (
    <div>
      <header className="bg-orange-300 px-4 py-8 flex gap-4 items-center">
        <div>
          <img
            src={user.avatar ?? "/anon.png"}
            alt=""
            className="w-[196px] h-[196px] rounded-full bg-slate-100"
          />
        </div>
        <div className="flex flex-col items-start">
          <span className="text-2xl font-bold">
            {user.name} {user.surname}
          </span>
          <span>@{user.username}</span>
          <LinkButton to="/editar-perfil" className="mt-4">
            Editar perfil
          </LinkButton>
        </div>
      </header>
    </div>
  );
}
