const express = require("express");
const router = express.Router();
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

const PostController = require("../controllers/posts.controller.js");

const ENDPOINT = "/posts";

router.post(
  `${ENDPOINT}`,
  upload.array("uploadFiles", 8),
  PostController.createPost
);
router.put(
  `${ENDPOINT}/:id`,
  upload.array("uploadFiles", 8),
  PostController.updatePost
);
router.get(`${ENDPOINT}`, PostController.getPosts);
router.get(`${ENDPOINT}/:id`, PostController.getPost);
router.delete(`${ENDPOINT}/:id`, PostController.deletePost);

module.exports = router;
