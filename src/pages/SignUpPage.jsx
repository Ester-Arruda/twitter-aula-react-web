import { Formik } from "formik";
import * as yup from "yup";
import { Button } from "../components/Button";
import { TextField } from "../components/TextField";
import { ErrorText } from "../components/ErrorText";
import { Card } from "../components/Card";

const signUpSchema = yup.object({
  name: yup
    .string()
    .min(2, "O nome precisa ter pelo menos 2 caracteres.")
    .max(16, "O nome precisa ter até 16 caracteres.")
    .required("O nome não pode ficar vazio."),
  surname: yup
    .string()
    .min(2, "O sobrenome precisa ter pelo menos 2 caracteres.")
    .max(24, "O sobrenome precisa ter até 24 caracteres.")
    .required("O sobrenome não pode ficar vazio."),
});

export function SignUpPage() {
  return (
    <div className="p-4 bg-gray-500">
      <Card>
        <Formik
          validationSchema={signUpSchema}
          initialValues={{
            name: "",
            surname: "",
          }}
          onSubmit={(values) => {
            alert(`
            Nome: ${values.name}
            Surname: ${values.surname}
          `);
          }}
        >
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            errors,
            values,
            touched,
          }) => (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-1"
            >
              <h2 className="text-center font-bold text-3xl mb-4">
                Criar conta
              </h2>
              <fieldset>
                <TextField
                  className={`w-full ${
                    touched.name && errors.name ? "border-red-500" : ""
                  }`}
                  name="name"
                  type="text"
                  placeholder="Digite o seu nome"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <ErrorText>{touched.name && errors.name}</ErrorText>
              </fieldset>
              <fieldset>
                <TextField
                  className={`w-full ${
                    touched.surname && errors.surname ? "border-red-500" : ""
                  }`}
                  name="surname"
                  type="text"
                  placeholder="Digite o seu sobrenome"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.surname}
                />
                <ErrorText>{touched.surname && errors.surname}</ErrorText>
              </fieldset>
              <Button className="mt-2" type="submit">
                Criar conta
              </Button>
            </form>
          )}
        </Formik>
      </Card>
    </div>
  );
}
