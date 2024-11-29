import LogOutBtn from "../LogOutBtn";
import { useUser } from "../services/login/useUser";
import UpdateData from "../services/signup/UpdateData";

function MainPage() {
  const { user } = useUser();

  return (
    <div>
      <h1>You LOGGED IN</h1>

      <div>
        <p>{user?.user_metadata?.fullName}</p>

        <img
          src={user?.user_metadata?.avatar || "No default image"}
          style={{ width: "100px", height: "100px" }}
          alt="user avatars"
        />
      </div>

      <LogOutBtn />

      <UpdateData />
    </div>
  );
}

export default MainPage;
