const express = require("express");
const userRouter = require("./user");
const authRouter = require("./auth")

const router = express.Router();
router.use("/", userRouter);
router.use("/",authRouter);
module.exports = router;
