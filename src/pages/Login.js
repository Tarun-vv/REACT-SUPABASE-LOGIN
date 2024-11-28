import { useState } from "react";
import { useLogin } from "../services/login/useLogin";

function Login() {
  const [email, setEmail] = useState("test@emaple.com");
  const [password, setPassword] = useState("test@123");

  // from useLogin
  const { login, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;
    login({ email, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form__group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          required
        />
      </div>

      <div className="form__group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          required
        />
      </div>

      <button disabled={isLoading}>
        {isLoading ? "Logging in" : "Log in"}
      </button>
    </form>
  );
}

export default Login;
