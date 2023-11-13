const titleInput = document.getElementById("title-input");
const contentsInput = document.getElementById("contents-input");
const writeButton = document.getElementById("write-button");

let titleValue = "";
let contentsValue = "";

const titleInputHandler = e => {
  titleValue = e.target.value;
};

const contentsInputHandler = e => {
  contentsValue = e.target.value;
};

titleInput.addEventListener("change", titleInputHandler);
contentsInput.addEventListener("change", contentsInputHandler);
writeButton.addEventListener("click", e => {
  // if (window.localStorage.getItem("name")){

  // }
  const userId = window.localStorage.getItem("name");

  fetch("/write", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `userId=${userId}&title=${titleValue}&contents=${contentsValue}`,
  })
    .then(response => response.json())
    .then(data => {
      const result = data.message;
      if (result === "success") {
        alert("게시물이 저장되었습니다.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
  // window.location.href = "/board";
});
