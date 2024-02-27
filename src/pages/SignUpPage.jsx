import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import InputMask from "react-input-mask";
import Typography from "@mui/material/Typography";

export function SignUpPage() {
  return (
    <Card elevation={8}>
      <CardContent>
        <TextField
          placeholder="Digite o seu nome"
          error
          helperText="Deu problema"
        />
        <TextField placeholder="Digite o seu sobrenome" />
        <TextField type="email" placeholder="Digite o seu email" />
        <InputMask mask="(99) 99999-9999">
          {(inputProps) => (
            <TextField
              {...inputProps}
              type="tel"
              placeholder="Digite o seu celular"
            />
          )}
        </InputMask>
        <InputMask mask="999.999.999-99">
          {(inputProps) => (
            <TextField {...inputProps} placeholder="Digite o seu CPF" />
          )}
        </InputMask>
        <TextField type="password" placeholder="Digite a sua senha" />
        <TextField type="password" placeholder="Confirme a sua senha" />
        <div>
          <Checkbox />
          <Typography>Li e aceito os termos de contrato</Typography>
        </div>
      </CardContent>
    </Card>
  );
}
