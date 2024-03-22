import useAxios from "axios-hooks";

const initialUser = {
  id: 0,
  username: "",
  email: "",
  cpf: "",
  gender: "",
  pronouns: "",
  name: "",
  surname: "",
  password: "",
  avatar: null,
  acceptTerms: false,
};

export function UserPage() {
  const [{ data: user = initialUser }] = useAxios("/account/profile");

  return (
    <div>
      <h1>teste f</h1>
      <pre>{JSON.stringify(user, undefined, 2)}</pre>
    </div>
  );
}
