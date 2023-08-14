import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", async (req, res) => {
    const response = await axios.get("	https://api.adviceslip.com/advice");
    const result = response.data;
    console.log(result);
    res.render("index.ejs", {advice: result.slip.advice, id: result.slip.id});
});

app.post("/", async (req, res) => {
    const response = await axios.get("	https://api.adviceslip.com/advice");
    const result = response.data;
    console.log(result);
    res.render("index.ejs", {advice: result.slip.advice, id: result.slip.id});
})



app.listen(3000, () => {
    console.log("Server running on port 3000.");
});