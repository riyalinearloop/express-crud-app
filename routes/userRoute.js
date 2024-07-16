const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/", userController.addUser);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUsersById);
router.put("/:id", userController.updateUsers);
router.delete("/:id", userController.deleteUser);

module.exports = router;
