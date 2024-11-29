import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../apiAuth";

export function useSignUp() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signupApi({ fullName, email, password }),
    onSuccess: (user) => {
      // alert("Account created! Please verify the email");
    },
  });

  return { signup, isLoading };
}
