import express from "express"
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://api.adviceslip.com/advice" ; 

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/" , async (req,res) => {
    try{
    const response = await axios.get(API_URL);
    const advice = response.data.slip.advice;
    res.render("index.ejs", { Advice: advice });
    }catch(error){
        console.error(error);
        res.render("index.ejs" , { error : "No advice for you today. Trust your instinct!" })
    }
})

app.post("/" , async (req,res) => {
    try{
    const response = await axios.get(API_URL);
    const advice = response.data.slip.advice;
    res.render("index.ejs", { Advice: advice });
    }catch(error){
        console.error(error);
        res.render("index.ejs" , { error : "No advice for you today. Trust your instinct!" })
    }
})

app.post("/search" , async (req,res) => {
    let ID = req.body["ID"];
    try{
        const response = await axios.get(API_URL + `/${ID}`);
        const advice = response.data.slip.advice;
        res.render("index.ejs", { Advice: advice });
    }catch(error){
        console.error(error);
        res.render("index.ejs" , { error : "No advice for you today. Trust your instinct!" })
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})