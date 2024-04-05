import { Link } from "react-router-dom";
import useAxios from "axios-hooks";
import { axios } from "../axios";

/** @type {Array<{ id: number, username: string, name: string, surname: string, email: string, phoneNumber: string, avatar: string }>} */
const initialUsers = [];

export function HomePage() {
  const [{ data: users = initialUsers }] = useAxios("/users");

  return (
    <div className="max-w-screen-lg m-auto p-3">
      <ul className="flex flex-col md:flex-row md:flex-wrap gap-3">
        {users.map((user) => (
          <li key={user.id}>
            <Link
              to={`/u/${user.username}`}
              className="flex items-center gap-2 p-3 border rounded-lg"
            >
              <img src={user.avatar} className="w-[72px] rounded-full" />
              <div className="flex flex-col">
                <span className="text-gray-500 text-sm">@{user.username}</span>
                <span className="font-bold">
                  {user.name} {user.surname}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
