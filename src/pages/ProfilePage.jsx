import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useAxios from "axios-hooks";

const initialUser = {
  id: 0,
  name: "",
  surname: "",
  email: "",
  username: "",
  phoneNumber: "",
  avatar: "",
};

export function ProfilePage() {
  const params = useParams();
  const [{ data: user = initialUser }, loadUser] = useAxios(
    `/users/${params.username}`,
    {
      manual: true,
    }
  );

  useEffect(() => {
    loadUser();
  }, [params.username]);

  return (
    <div>
      <img src={user.avatar} />
      {user.name} {user.surname}
      <Link to="/u/estefania.kuhn83">estefania.kuhn83</Link>
    </div>
  );
}
