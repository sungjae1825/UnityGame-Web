const updateTitleInput = document.getElementById("update-title-input");
const updateContentsInput = document.getElementById("update-contents-input");
const updateWriteButton = document.getElementById("update-write-button");

const query = window.location.search;
const param = new URLSearchParams(query);
const postId = param.get("postId");

fetch(`board/${postId}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
})
  .then(response => response.json())
  .then(data => {
    updateTitleInput.value = data.title;
    updateContentsInput.innerHTML = data.contents;
  });

updateWriteButton.addEventListener("click", e => {
  e.preventDefault();

  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);
  const day = ("0" + today.getDate()).slice(-2);

  const dateString = year + "-" + month + "-" + day;

  fetch("/write-update", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `postId=${postId}&updateTitle=${updateTitleInput.value}&updateContents=${updateContentsInput.value}&updateDate=${dateString}`,
  })
    .then(response => response.json())
    .then(data => {
      const result = data.message;
      if (result === "success") {
        alert("게시물이 수정되었습니다.");
        window.location.href = `/boardPost?postId=${postId}`;
      }
    })
    .catch(error => {
      console.error("Error:", error);
    });
});
