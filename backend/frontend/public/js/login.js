const loginForm = document.getElementById("login-form");

const logoutBtn = document.getElementById("logout");

// 로그인 인풋값 서버 전송.
loginForm.addEventListener("submit", e => {
  e.preventDefault();

  const userId = loginForm.userId.value;
  const userPw = loginForm.userPw.value;

  if (userId && userPw) {
    // HTML form을 통해 POST 요청을 보냄
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `userId=${userId}&userPw=${userPw}`,
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === "success") {
          window.localStorage.setItem("nickname", data.userNickname);
          window.location.href = "/";
        } else {
          window.alert("아이디 또는 비밀번호가 잘못되었습니다.");
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
  } else {
    alert("아이디와 비밀번호를 입력하세요.");
  }
});
