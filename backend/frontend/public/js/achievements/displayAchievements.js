class Achievements {
  constructor(name, title, contents) {
    this.name = name;
    this.title = title;
    this.contents = contents;
  }
}

const achievementsData = [
  new Achievements("tekken", "무패신화", "철권 무패전승"),
  new Achievements("packman", "식신", "코인 다 먹기"),
  new Achievements("quiz", "아인슈타인", "문제 안 틀리고 다 풀기"),
  new Achievements("tower-defence", "제갈량", "목숨 닳지 않고 클리어"),
  new Achievements("escape", "탈옥전문가", "5분 안에 탈출"),
];

const achievementsContainer = document.querySelector(".achievements-box-container");

for (let i of achievementsData) {
  const div = document.createElement("div");
  div.classList.add("achievements-box", "opacity");
  div.id = `${i.name}`;
  const h4 = document.createElement("h4");
  h4.innerHTML = `${i.title}`;
  const p = document.createElement("p");
  p.innerHTML = `${i.contents}`;
  div.appendChild(h4);
  div.appendChild(p);
  achievementsContainer.appendChild(div);
}
