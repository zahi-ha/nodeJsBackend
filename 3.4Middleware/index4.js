import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 8081;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(req.body);
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  var bandName = req.body.street + req.body.pet;
  var resTemplateFile = "/public/indexResTemplate.html";
  var resFile = "/public/indexRes.html";
  console.log (`youe band name is ${bandName}`); 
  res.send(`<h1>your Band Name is</h1><h2>${bandName}</h2>`);
  // fs.readFile(__dirname+resTemplateFile, "utf-8", function (err, data){
  //     if (err) {
  //       return console.log(err);
  //     }
  //     var result = data.replace("replace me", bandName);
    
  //     fs.writeFile(__dirname+resFile, result, 'utf8', function (err) {
  //       if (err) return console.log(err);
  //     });
  //   });
  //   res.sendFile(__dirname + resFile);
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
