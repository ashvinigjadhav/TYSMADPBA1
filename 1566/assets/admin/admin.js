function loginAdmin() {
  const user = document.getElementById("adminUsername").value;
  const pass = document.getElementById("adminPassword").value;

  if (user === "admin" && pass === "admin123") {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
  } else {
    alert("Invalid login. Try again.");
  }
}

function logoutAdmin() {
  document.getElementById("adminPanel").style.display = "none";
  document.getElementById("loginPage").style.display = "flex";
  document.getElementById("adminUsername").value = "";
  document.getElementById("adminPassword").value = "";
}

