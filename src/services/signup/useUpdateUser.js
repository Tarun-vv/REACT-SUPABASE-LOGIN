import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      // toast.success("Cabin successfully edited");
      queryClient.setQueriesData("user", user);
    },
    onError: (err) => console.error(err.message),
  });

  return { updateUser, isUpdating };
}
