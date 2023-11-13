fetch("/board-data", {
  method: "GET",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
})
  .then((response) => response.json())
  .then((data) => {
    const boardContainer = document.getElementById("board-container");
    for (i of data) {
      const writeBox = document.createElement("div");
      writeBox.classList.add("board-write-box");
      const writeA = document.createElement("a");
      writeA.href = `/boardPost?postId=${i.id}`;
      writeA.classList.add("board-write-a");

      const writeId = document.createElement("span");
      writeId.innerHTML = i.id;
      writeId.classList.add("board-write", "write-num");
      const writeTitle = document.createElement("span");
      writeTitle.innerHTML = i.title;
      writeTitle.classList.add("board-write", "write-title");
      const writeWriter = document.createElement("span");
      // json으로 오는 null이라 string값으로 오는듯하다.
      if (i.userId !== "null") {
        writeWriter.innerHTML = i.userId;
      } else {
        writeWriter.innerHTML = "익명";
      }
      writeWriter.classList.add("board-write", "write-writer");
      const writeDate = document.createElement("span");
      writeDate.innerHTML = `${i.date}`;
      writeDate.classList.add("board-write", "write-date");

      writeA.appendChild(writeId);
      writeA.appendChild(writeTitle);
      writeA.appendChild(writeWriter);
      writeA.appendChild(writeDate);
      writeBox.appendChild(writeA);
      boardContainer.appendChild(writeBox);
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
