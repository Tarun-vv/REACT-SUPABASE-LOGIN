import { supabase } from "./supabase";

// SIGNIN
export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  console.log(data);
  return data;
}

// UPDATE THE SIGNED IN DATA

export async function updateCurrentUser({ password, fullName, avatar }) {
  // 1. update password or fullName
  let updateData;
  if (password) updateData = { password };
  if (fullName)
    updateData = {
      data: {
        fullName,
      },
    };

  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);

  if (!avatar) return data;

  // 2. upload avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (error) throw new Error(storageError.message);

  // 3. update avatar in user itself
  const { data: updateUser, error: error2 } = supabase.auth.updateUser({
    data: {
      avatar: `https://kjibqvexozllbalvpxey.supabase.co/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (error2) throw new Error(error2.message);

  return updateUser;
}

// https://kjibqvexozllbalvpxey.supabase.co/storage/v1/object/public/avatars/table-5-seat-big.webp

// LOGIN
export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  console.log(data);
  return data;
}

export async function getCurrentUser() {
  // checking for active session
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  // getting user
  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
