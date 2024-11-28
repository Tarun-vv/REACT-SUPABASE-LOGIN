import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      alert("Successfully logged in");
      navigate("/main-page");
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  return { login, isLoading };
}
