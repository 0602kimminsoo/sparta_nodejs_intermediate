import express from "express";
import { SERVER_PORT } from "./constants/app.constants.js";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!2");
});

app.listen(SERVER_PORT, () => {
  console.log(`Example app listening on port ${SERVER_PORT}`);
});

//기존의 일반 port 자리에 SERVER_PORT 포트를 대신 넣어 수정
