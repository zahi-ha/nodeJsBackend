//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";


var app = express();
const correctpassword = "ILoveProgramming";
const port = "8081";
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// app.use("/check", (req, res) => {
//     console.log(res.body);
// });

app.post("/check", (req, res) => {
    console.log(`response body : ${req.body}`);
    if(req.body.password == correctpassword){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else{
        res.redirect("/");
    }
});

app.listen(port, () => {
    console.log (`listening on port ${port}`);
});