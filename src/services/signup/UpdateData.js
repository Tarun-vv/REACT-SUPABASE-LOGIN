import { useState } from "react";
import { useUser } from "../login/useUser";
import { useUpdateUser } from "./useUpdateUser";

function UpdateData() {
  const { user: { email, user_metadata: { fullName: currentFullName } } = {} } =
    useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }

  return (
    <div>
      <h2>Update your account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" disabled value={email} />
        </div>

        <div>
          <label>Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            disabled={isUpdating}
          />
        </div>

        <div>
          <label>Avatar Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setAvatar(e.target.files[0])}
            disabled={isUpdating}
          />
        </div>

        <button type="reset">Cancel</button>
        <button>Update</button>
      </form>
    </div>
  );
}

export default UpdateData;
