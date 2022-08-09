const express = require("express");
const multer = require('multer')
const mongoose = require("mongoose");
const route = require("./routes/route");
const app = express();

app.use(express.json())

app.use(multer().any())

mongoose.connect("mongodb+srv://Nishant-R:cMVSc6ePV6V4dr03@cluster0.rembes2.mongodb.net/group51Database",{
      useNewUrlParser:true
})
.then((rerult)=>console.log("MongoDB is connected"))
.catch((err)=>console.log(err.message));

app.use("/" ,route);
app.listen(process.env.PORT || 3000 ,()=>{console.log("server is start on port "+ (process.env.PORT || 3000))})
