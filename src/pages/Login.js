function Login() {
  return (
    <form>
      <div className="form__group">
        <label>Email</label>
        <input type="email" placeholder="Email" required />
      </div>

      <div className="form__group">
        <label>Password</label>
        <input type="password" placeholder="Password" required />
      </div>

      <button>Log in</button>
    </form>
  );
}

export default Login;
