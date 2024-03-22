import { useState } from "react";
import { Card } from "../components/Card";
import { TextField } from "../components/TextField";
import { Button } from "../components/Button";
import { AxiosError } from "axios";
import { axios } from "../axios";
import toast from "react-simple-toasts";

export function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post("/account/sign-in", {
        username,
        password,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast(error.response.data.error);
      }
    }
  }

  return (
    <div className="w-full h-full flex items-center justify-center absolute">
      <Card>
        <h2 className="text-center font-bold text-3xl mb-4">
          Entrar na sua conta
        </h2>
        <form
          action=""
          noValidate
          onSubmit={onSubmit}
          className="flex flex-col gap-2"
        >
          <fieldset>
            <TextField
              className="w-full"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Digite o seu username"
            />
          </fieldset>
          <fieldset>
            <TextField
              className="w-full"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Digite a sua senha"
            />
          </fieldset>
          <Button type="submit">Enviar</Button>
        </form>
      </Card>
    </div>
  );
}
