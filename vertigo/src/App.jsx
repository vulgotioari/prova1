import { useState } from "react";
import logoImg from "./assets/logo.svg";

export function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erros, setErros] = useState({ email: "", password: "" });

  function handlesubmit(event) {
    event.preventDefault();
    let formIsValid = true;
    let newErros = { email: "", password: "" };

    if (!email) {
      newErros.email = "O email é obrigatorio";
      formIsValid = false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      newErros.email = "digite um email valido";
      formIsValid = false;
    }

    if (!password) {
      newErros.password = "a senha é obrigatoria";
      formIsValid = false;
    }

    if (password.length < 6) {
      newErros = "a senha deve ter pelo menos 6 caracteres";
      formIsValid = false;
    }

    if (!formIsValid) {
      setErros(newErros);
      return;
    }

    console.log("Email:", email);
    console.log("Senha:", password);
  }

  return (
    <div className="container">
      <div className="s-form">
        <img src={logoImg} alt="" />

        <h1>Acesse a plataforma</h1>
        <p>
          Faça login ou registre-se para começar a construir seus projetos ainda
          hoje.
        </p>
        <form onSubmit={handlesubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Digite o seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div>
            <label htmlFor="senha">Senha</label>
            <button type="button" className="forgot-password-btn">
              Esqueceu a senha?
            </button>
          </div>
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="submit-btn">
            Entrar
          </button>
        </form>

        <div className="sign-up">
          <p>
            Ainda nao tem uma conta
            <button type="button">Inscreva-se</button>
          </p>
        </div>
      </div>
      <div className="s-right"></div>
    </div>
  );
}
