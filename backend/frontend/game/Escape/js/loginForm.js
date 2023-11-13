const loginFormContainer = document.getElementById("login-form-container");

const login = document.getElementById("login");
const signup = document.getElementById("signup");
const logout = document.getElementById("logout");

const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

const name = window.localStorage.getItem("name");

const h1 = document.createElement("h1");

// 로그인 클릭 처리
login.addEventListener("click", e => {
  e.preventDefault();
  loginFormContainer.classList.remove("display-none");
  loginForm.classList.remove("display-none");
  signupForm.classList.add("display-none");
  loginBtn.classList.add("clicked");
});

// 회원가입 클릭 처리
signup.addEventListener("click", e => {
  e.preventDefault();
  loginFormContainer.classList.remove("display-none");
  loginForm.classList.add("display-none");
  signupForm.classList.remove("display-none");
  signupBtn.classList.add("clicked");
});

// 로그인, 회원가입 폼 클릭 처리
loginFormContainer.addEventListener("click", e => {
  if (e.target == loginFormContainer) {
    loginFormContainer.classList.add("display-none");
    loginBtn.classList.remove("clicked");
    signupBtn.classList.remove("clicked");
  }
});

// 로그인폼 안에 로그인, 회원가입 클릭 처리
loginBtn.addEventListener("click", () => {
  loginBtn.classList.add("clicked");
  signupBtn.classList.remove("clicked");
  loginForm.classList.remove("display-none");
  signupForm.classList.add("display-none");
});
signupBtn.addEventListener("click", () => {
  loginBtn.classList.remove("clicked");
  signupBtn.classList.add("clicked");
  loginForm.classList.add("display-none");
  signupForm.classList.remove("display-none");
});

// 유저 정보 있을 시 처리
if (name) {
  login.style.display = "none";
  signup.style.display = "none";
  logout.style.display = "block";

  h1.textContent = `${name}아 반갑다`;
  nickname.appendChild(h1);
  // 없을 시 처리
} else {
  login.style.display = "inline";
  signup.style.display = "inline";
  logout.style.display = "none";
}

// 로그아웃 처리
logout.addEventListener("click", () => {
  window.localStorage.removeItem("name");
  window.location.href = "/";
});
