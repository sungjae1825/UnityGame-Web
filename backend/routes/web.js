const express = require("express");

const router = express.Router();

const { Board } = require("../models/board");
const { User } = require("../models/user");

router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/board", (req, res, next) => {
  res.render("board");
});
router.get("/board-data", (req, res, next) => {
  Board.findAll()
    .then(write => {
      return res.json(write);
    })
    .catch(err => {
      console.log(err);
    });
});
router.get("/boardPost", (req, res, next) => {
  res.render("boardPost");
});
router.get("/board/:id", (req, res, next) => {
  Board.findById({ id: Number(req.params.id) })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log("게시글 오류 : ", err);
    });
});

router.get("/write", (req, res, next) => {
  res.render("write");
});
router.post("/write", (req, res, next) => {
  const { userId, title, contents, date } = { ...req.body };
  Board.findWriteCount().then(write => {
    const totalPosts = write.totalPosts;
    if (totalPosts !== undefined) {
      const board = new Board(totalPosts + 1, userId, title, contents, date);

      board
        .save()
        .then(result => {
          console.log("Board saved: ", result);
          Board.increaseWriteCount();
          res.status(202).json({ message: "success" });
        })
        .catch(error => {
          console.error("Error saving board:", error);
          res.status(500).json({ message: "fail" });
        });
    } else {
      console.log("Write 콜렉션에 문제가 있어");
      res.status(500).json({ message: "오류가 있어" });
    }
  });
});

router.delete("/delete-post", (req, res, next) => {
  Board.deleteOneById({ id: Number(req.body.postId) })
    .then(result => {
      console.log(result);
      res.json({ message: "success" });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/write-update", (req, res, next) => {
  res.render("writeUpdate");
});
router.post("/write-update", (req, res, next) => {
  const { postId, updateTitle, updateContents, updateDate } = { ...req.body };

  console.log(postId, updateTitle, updateContents, updateDate);

  Board.updateOneById({ postId, updateTitle, updateContents, updateDate })
    .then(result => {
      res.json({ message: "success" });
    })
    .catch(err => {
      console.log("게시글 수정 오류: ", err);
    });
});

router.get("/game", (req, res, next) => {
  res.render("game");
});

router.get("/achievements", (req, res, next) => {
  res.render("achievements");
});
router.post("/achievements-data", (req, res, next) => {
  const { nickname } = { ...req.body };

  User.findByNickname({ nickname })
    .then(result => {
      res.json({ achievements: result.achievements });
    })
    .catch(err => {
      console.log("업적찾기 오류: ", err);
    });
});

module.exports = router;
