const signupForm = document.getElementById("signup-form");

// 로그인 인풋값 서버 전송.
signupForm.addEventListener("submit", e => {
  e.preventDefault();

  const userId = signupForm.userId.value;
  const userPw = signupForm.userPw.value;

  if (userId && userPw) {
    // HTML form을 통해 POST 요청을 보냄
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `userId=${userId}&userPw=${userPw}`,
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          window.location.href = "/";
        }
        alert(data.message);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  } else {
    alert("아이디와 비밀번호를 입력하세요.");
  }
});
