import express from "express"
import {edit, logout, remove, see} from "../controller/userController"

const userRouter = express.Router()

userRouter.get("/logout", logout)
userRouter.get("/edit", edit)
userRouter.get("/remove", remove)
userRouter.get("/:id", see)

export default userRouter;