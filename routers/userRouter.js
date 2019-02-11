import express from "express";
import routes from "../routes";
import { users, userDetail, editProfile, changePassword } from "../controllers/userController";

const userRouter = express.Router();

// 라우터가 순서대로 인식 /users/:id가 가장 먼저 있을경우 /users/edit-profile역시 전자의 라우터로 이해하게됨 따라서 /users/edit-profile을 제일 위쪽으로 올려줘야함
userRouter.get(routes.editProfile,editProfile);
userRouter.get(routes.changePassword,changePassword);
userRouter.get(routes.userDetail,userDetail);

export default userRouter;