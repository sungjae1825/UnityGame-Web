const postTitle = document.getElementById("post-title");
const postUserId = document.getElementById("post-user-id");
const postDate = document.getElementById("post-date");

const postContents = document.getElementById("post-contents");

const postUserButton = document.getElementById("post-user-button");

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
    postTitle.innerHTML = data.title;
    if (data.userId !== "null") {
      postUserId.innerHTML = data.userId;
    } else {
      postUserId.innerHTML = "익명";
    }
    postDate.innerHTML = data.date;
    postContents.innerHTML = data.contents;

    console.log(nickname, data.userId);
    if (nickname !== data.userId) {
      postUserButton.classList.add("display-none");
    } else {
      postUserButton.classList.remove("display-none");
    }
  });
