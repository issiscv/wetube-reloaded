import express from "express";
import morgan from "morgan";
import globalRouter from "./router/globalRouter";
import userRouter from "./router/userRouter";
import videoRouter from "./router/videoRouter";


//settings
const PORT = 5000;
console.log(process.cwd())

//init
const app = express()
const logger = morgan("dev");

app.set("view engine", "pug");
app.use(logger);
app.use("/", globalRouter)
app.use("/users", userRouter)
app.use("/videos", videoRouter)

const listener = () => console.log(`Listening on port ${PORT}`)
app.listen(PORT, listener)
