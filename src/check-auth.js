import { getAuthenticatedUser } from "./api/auth.js";

export async function checkAuth(status = ["verified"]) {
  const { data: user } = await getAuthenticatedUser();

  if (!user || !status.includes(user.status)) {
    window.location.href = "../auth/login.html";
    return null;
  }

  return user;
}
