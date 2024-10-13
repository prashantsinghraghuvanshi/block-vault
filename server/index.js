const express=require('express');
const env=require('dotenv');
const app=express();

env.config();

const port=process.env.PORT || 3001;

app.listen(port,()=>{
    console.log(`Server is live at port : ${port}`);
})