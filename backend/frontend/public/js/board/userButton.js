const updateButton = document.getElementById("update-button");
const deleteButton = document.getElementById("delete-button");

updateButton.addEventListener("click", e => {
  e.preventDefault();

  window.location.href = `/write-update?postId=${postId}`;
});
deleteButton.addEventListener("click", e => {
  e.preventDefault();

  fetch(`/delete-post`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `postId=${postId}`,
  })
    .then(response => response.json())
    .then(data => {
      if (data.message === "success") {
        alert("게시글이 삭제되었습니다.");
        window.location.href = "/board";
      }
    });
});
