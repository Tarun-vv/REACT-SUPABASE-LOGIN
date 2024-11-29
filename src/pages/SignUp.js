import { useForm } from "react-hook-form";
import { useSignUp } from "../services/signup/useSignUp";
import { useNavigate } from "react-router-dom";

// regex :

function SignUp() {
  const navigate = useNavigate();

  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const { signup, isLoading } = useSignUp();

  function onSubmit({ fullName, email, password }) {
    console.log({ fullName, email, password });
    signup(
      { fullName, email, password },
      {
        onSuccess: () => {
          reset();
          navigate("/main-page");
        },
      }
    );
  }

  return (
    <form onClick={handleSubmit(onSubmit)}>
      <div className="form__group">
        <label>Full Name</label>
        <input
          type="text"
          placeholder="Full Name"
          id="fullName"
          required
          {...register("fullName", {
            required: "This field is required",
          })}
        />
        {errors?.fullName?.message && <p>{errors?.fullName?.message}</p>}
      </div>

      <div className="form__group">
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          required
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Provide proper email address",
            },
          })}
        />
        {errors?.email?.message && <p>{errors.email.message}</p>}
      </div>

      <div className="form__group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          required
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password has to be atleast 8 charecters",
            },
          })}
        />
        {errors?.password?.message && <p>{errors.password.message}</p>}
      </div>

      <div className="form__group">
        <label>Repeat Password</label>
        <input
          type="password"
          placeholder="Password"
          id="passwordConfirm"
          required
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Password doesnt match",
          })}
        />
        {errors?.passwordConfirm?.message && (
          <p>{errors.passwordConfirm.message}</p>
        )}
      </div>

      <button>Sign in</button>
    </form>
  );
}

export default SignUp;
