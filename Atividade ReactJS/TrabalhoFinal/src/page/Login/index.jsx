import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Login = () => {
  const navigate = useNavigate();
  // Crie um state para username iniciando como string vazia.
  const [username, setUsername] = useState("");
  // Crie um state para password iniciando como string vazia.
  const [password, setPassword] = useState("");
  // Crie um state para message iniciando como string vazia.
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    await fetch("/users.json")
      .then((response) => response.json())
      .then((data) => {
        const users = data.users;
        const user = users.find(
          (u) => u.username === username && u.password === password
        );
        if (user) {
          localStorage.setItem("authenticated", "true");
          navigate("/dashboard");
        } else {
          setMessage("Login falhou. Verifique suas credenciais.");
        }
      });
  };

  return (
    <div className="login-container">
      <img src="/public/imagens/minecraft.png" style={{ width: 50 }} alt="Logo" />
      <h2 className="login-title">Logar</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>
        Logar
      </button>
      <p>{message}</p>
    </div>
  );
};

export default Login;
