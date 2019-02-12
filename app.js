import express from  "express";
import morgan from "morgan"; 
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";

const app = express();
// middle ware
// route
app.use(helmet());
app.set("view engine","pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));

app.use(localsMiddleware);  

app.use(routes.home,globalRouter);
app.use(routes.users,userRouter); //user라우터가 userRouter를 모두 다 사용한다는 뜻.
app.use(routes.videos,videoRouter);

export default app;