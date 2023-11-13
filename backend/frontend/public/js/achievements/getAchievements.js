fetch("/achievements-data", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: `nickname=${nickname}`,
})
  .then(response => response.json())
  .then(result => {
    for (let i of result.achievements) {
      const temp = document.getElementById(`${i}`);
      temp.classList.remove("opacity");
    }
  });
