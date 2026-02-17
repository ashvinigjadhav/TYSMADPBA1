const USERS_KEY = "artist_users";
const ACTIVE_USER_KEY = "active_artist_user";


export function registerUser(newUser) {
  const users = JSON.parse(localStorage.getItem("users")) || [];

 
  if (users.find((u) => u.email === newUser.email)) {
    throw new Error("Email already registered. Please log in.");
  }

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(newUser));
  return newUser;
}

export function loginUser(email, password) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const found = users.find(
    (u) => u.email === email && u.password === password
  );
  if (!found) throw new Error("Invalid credentials");
  localStorage.setItem("currentUser", JSON.stringify(found));
  return found;
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

export function logoutUser() {
  localStorage.removeItem("currentUser");
}

export function isLoggedIn() {
  return !!localStorage.getItem("currentUser");
}