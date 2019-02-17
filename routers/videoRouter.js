import express from "express";
import routes from "../routes";
import {
  getupload,
  postupload,
  videoDetail,
  deleteVideo,
  getEditVideo,
  postEditVideo,
  
} from "../controllers/videoController";
import { uploadVideoMiddleware } from "../middlewares";


const videoRouter = express.Router();

videoRouter.get(routes.upload,getupload);
videoRouter.post(routes.upload,uploadVideoMiddleware,postupload)
videoRouter.get(routes.videoDetail(),videoDetail);

export default videoRouter;