import { useLogout } from "./services/logout/useLogout";

function LogOutBtn() {
  const { logout, isLoading } = useLogout();

  return (
    <button onClick={logout} disabled={isLoading}>
      Log out
    </button>
  );
}

export default LogOutBtn;
