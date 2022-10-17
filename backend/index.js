import express from "express"
import { db } from "./db.js"

const app = express()

app.get("/", (req, res) => {
    res.json("hello this is the backend")
})

app.get("/books", (req,res) => {
    const q = "SELECT * FROM books"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books", (req, res) => {
    const q = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?)"
    const values = ["title from backend", "desc from backend", "cover from backend"]

    db.query(q, [values], (err,data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800, () => {
    console.log("Connected to backend!")
})