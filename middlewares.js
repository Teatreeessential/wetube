import routes from "./routes";
import multer from "multer";

 const uploadVideo = multer({dest:"uploads\\videos\\"});

export const localsMiddleware = (req,res,next) => {
    res.locals.siteName = 'WeTube';
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated:true,
        id:1
    }
    next();
}
//html form에서 file의 name을 설정값으로 넣는다.
export const uploadVideoMiddleware = uploadVideo.single('videoFile');