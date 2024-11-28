function SignUp() {
  return (
    <form>
      <div className="form__group">
        <label>Full Name</label>
        <input type="text" placeholder="Full Name" required />
      </div>

      <div className="form__group">
        <label>Email</label>
        <input type="email" placeholder="Email" required />
      </div>

      <div className="form__group">
        <label>Password</label>
        <input type="password" placeholder="Password" required />
      </div>

      <div className="form__group">
        <label>Repeat Password</label>
        <input type="password" placeholder="Password" required />
      </div>

      <button>Log in</button>
    </form>
  );
}

export default SignUp;
