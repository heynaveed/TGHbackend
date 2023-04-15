const express = require("express");
const cors = require("cors");
const { Connection } = require("./Config/db");
const { QuotesModel } = require("./Model/QoutesModel");

const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.post("/quotes", async (req, res) => {
    const { author, authorSlug, content, dateAdded, dateModified, length, tags, _id } = req.body;
    const AddQuote = new QuotesModel({
        author: author,
        authorSlug: authorSlug,
        content: content,
        dateAdded: dateAdded,
        dateModified: dateModified,
        length: length,
        tags: tags,
        _id: _id
    });
    await AddQuote.save();
    res.send("Quote Bookmarked Successfully")
})

app.get("/quotes", async (req, res) => {
    const results = await QuotesModel.find({})
    res.send(results);
})

app.delete("/quotes",async(req,res)=>{
    let payload=req.query.id;
    await QuotesModel.deleteMany({_id:payload})
    res.send("Quote Deleted Successfully")
})


app.listen(PORT, async () => {
    try {
        await Connection;
        console.log("connection to DB successfull")
    }
    catch (err) {
        console.log("error in connecting to DB");
        console.log(err)
    }
    console.log(`listening to port ${PORT}`);
})