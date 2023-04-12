import React, { useState } from "react";
import "../login/login.css";
import Navegacion from '../Navegacion/Navegacion'


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Lógica para llamar a la API externa y realizar la autenticación
      // Puedes usar fetch o axios para hacer la petición a la API
      // Aquí se muestra un ejemplo básico utilizando fetch
      const response = await fetch("https://api.example.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        // Autenticación exitosa, puedes redirigir al usuario a la página de inicio
        console.log("Autenticación exitosa");
      } else {
        // Manejo de errores en caso de fallo de autenticación
        console.log("Error de autenticación");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
        <Navegacion/>
    <div className="login-container">
      <h1>Iniciar sesión</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
    </div>
  );
};

export default Login;



