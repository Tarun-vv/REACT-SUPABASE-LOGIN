import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient(); // #fff

  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      // alert("Successfully logged in");
      queryClient.setQueryData(["user"], user.user); // #fff
      navigate("/main-page");
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  return { login, isLoading };
}
