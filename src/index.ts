import express from "express"
import { db } from "./utils/db";
import { tests } from "./models/tests";

const app = express();

app.get("/api/hola", async (req, res) => {

    const result = await db.select().from(tests)

    console.log(result)
    res.json(result)
})

app.listen(2544, () => {
    console.log("Ready")
})