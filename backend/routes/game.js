const express = require("express");
const cors = require("cors"); // cors 라이브러리 import
const { User } = require("../models/user");

const router = express.Router();

router.use(cors()); // cors 사용
router.use(express.json());

router.get("/escape", (req, res) => {
  res.render("game/Escape/index");
});

router.get("/quiz", (req, res, next) => {
  res.render("game/Quiz/index");
});

router.get("/tower-defence", (req, res, next) => {
  res.render("game/Tower-Defence/index");
});

router.get("/tekken", (req, res, next) => {
  res.render("game/Tekken/index");
});

router.get("/packman", (req, res, next) => {
  res.render("game/Packman/index");
});

// 유니티 게임에서 서버 통신
router.post("/update-achievements", (req, res, next) => {
  const nickname = "qwer";
  const game = req.body.game;

  const gameList = ["tekken", "packman", "quiz", "escape", "tower-defence"];
  if (!gameList.includes(game)) {
    return res.send("ㅈ같은 게임 보내지마");
  }

  User.findByNickname({ nickname: nickname }).then(result => {
    if (result.achievements.includes(game)) {
      return res.send("포함됨");
    } else {
      User.updateAchievementsByNickname({ nickname: nickname, achievements: [...result.achievements, game] })
        .then(result => {
          return res.send("업적이 저장되었어");
        })
        .catch(err => {
          console.log("업적 업데이트 오류:", err);
        });
    }
  });
});

module.exports = router;
