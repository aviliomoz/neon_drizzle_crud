import express from "express"

const app = express();

app.get("/api/hola", (req, res) => {
    res.send("Hola")
})

app.listen(2544, () => {
    console.log("Ready")
})