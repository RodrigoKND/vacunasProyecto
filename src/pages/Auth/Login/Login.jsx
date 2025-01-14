import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch";
import MessageAlert from "../../../components/MessageAlert";
import { validFieldsForm } from "../../../utils/validFieldsForm";

function Login() {
  const navigate = useNavigate();
  const [valuesForm, setValuesForm] = useState({
    email: "",
    password: "",
  });

  const { error, data, isLoading, refetch, setError } = useFetch({
    url: "http://127.0.0.1:8000/auth/login",
    method: "POST",
    values: valuesForm,
    autoFetch: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if(validFieldsForm.isEmpty(valuesForm.email) || validFieldsForm.isEmpty(valuesForm.password)) {
      setError("Por favor, rellena todos los campos");
      return;
    }

    if(!validFieldsForm.isValidEmail(valuesForm.email) || !validFieldsForm.IsvalidPassword(valuesForm.password)) {
      setError("Por favor, ingresa un correo electrónico y una contraseña válidas");
      return;
    }

    refetch();
  };

  const handleChange = (event) => {
    setValuesForm({ ...valuesForm, [event.target.name]: event.target.value });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full p-6 max-w-md bg-white shadow-lg">
        <header className="mb-8">
          <div className="flex justify-center mb-4">
            <div className="relative w-20 h-20 bg-blue-500 rounded-full overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">VT</span>
              </div>
              <div className="absolute bottom-0 w-full h-1/3 bg-blue-600"></div>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center">VacciTemp</h1>
          <p className="text-center mt-3">Sistema de monitoreo de vacunas</p>
        </header>
        {error && <MessageAlert message={error} state="error" />}
        {data && <MessageAlert message={data.message} state="success" />}
        <form method="POST" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email">Correo electrónico</label>
              <input
                id="email"
                type="email"
                placeholder="correo@gmail.com"
                // required
                value={valuesForm.email}
                autoComplete="email"
                name="email"
                onChange={handleChange}
                className={`${error && valuesForm.email !== "" && "border-red-500"} border border-solid border-gray-300 px-4 py-2 w-full`}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password">Contraseña</label>
              <div className="relative">
                <input
                  id="password"
                  type={"password"}
                //   required
                  autoComplete="current-password"
                  value={valuesForm.password}
                  name="password"
                  onChange={handleChange}
                  className={`${error && valuesForm.password !== "" && "border-red-500"} border border-solid border-gray-300 px-4 py-2 w-full`}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="bg-black cursor-pointer flex justify-center w-full mt-8 items-center text-white font-medium rounded-lg px-6 py-3"
          >
            {!isLoading ? (
              <span>Iniciar sesión</span>
            ) : (
              <span>Cargando...</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
