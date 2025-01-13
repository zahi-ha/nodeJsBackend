import express from "express";
const app = express();
const port = 8081;

app.listen(port, ()=>{
    console.log(`start listening on port ${port}`);
});

app.get("/", (req, res)=>{
    res.send("Hello world!");
});

app.get("/contact", (req, res)=>{
    res.send("<h1> Contact info</h1> <p>mailto: zahi.ha@gmail.com</h2>");
});

app.post("/register", (req, res)=>{
    res.sendStatus("201");
});

app.put("/users/zahi", (req, res)=>{
    res.sendStatus("200");
});

app.patch("/users/zahi", (req, res)=>{
    res.sendStatus("200");
});

app.delete("/users/zahi", (req, res)=>{
    res.sendStatus("200");
});