import express from "express";
import { lstat } from "fs";
import morgan from "morgan";

const app = express();
const port = 8081;

app.use(morgan('combined'));
// app.use(morgan (function (tokens, req, res) {
//   return [
//     tokens.method(req, res),
//     tokens.url(req, res),
//     tokens.status(req, res),
//     tokens.res(req, res, 'content-length'), '-',
//     tokens['response-time'](req, res), 'ms'
//   ].join(' ')
// }));
//app.use(morgan(':method :url :status :res[content-length] - :response-time ms - :user-agent'));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
