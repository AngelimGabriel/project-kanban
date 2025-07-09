import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Login = () => {
  const schemaLogin = yup.object().shape({
    user: yup.string().required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schemaLogin) });
  const user = "admin";
  const password = "password";

  const onSubmit = (data) => {
    if (data.user === user && data.password == password) {
      localStorage.setItem("auth", true);
      localStorage.setItem("username", data.user);
      window.location.href = "/";
    }
  };

  return (
    <div className="flex flex-1 p-6 items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className=" max-h-64 h-full max-w-96 w-full flex flex-col gap-3 items-center p-6">
        <div>
          <h1 className="font-medium text-2xl">Login</h1>
        </div>
        <div className="flex flex-col flex-1 justify-center gap-3 w-full">
          <input
            className="border border-sky-500 focus:outline-2 focus:outline-sky-500 invalid:border-2 invalid:border-orange-600 focus:invalid:outline-orange-600 px-1.5 rounded-lg h-10"
            type="text"
            placeholder="Usuário"
            {...register("user")}
          />
          {errors.user && <span>{errors.user.message}</span>}

          <input
            className="border border-sky-500 focus:outline-2 focus:outline-sky-500 invalid:border-2 invalid:border-orange-600 focus:invalid:outline-orange-600 px-1.5 rounded-lg h-10"
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          {errors.password && (
            <>
              <span>{errors.password.message}</span> {console.log(errors)}
            </>
          )}

          <button className="bg-sky-500 text-white h-10 rounded-lg hover:bg-sky-600 transition duration-300 cursor-pointer" type="submit">
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
