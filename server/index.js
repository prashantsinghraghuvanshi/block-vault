const express=require('express');
const env=require('dotenv');
const app=express();
const cors=require('cors');
const authRoute=require('./routes/authRoute');
const port=process.env.PORT || 3001;

env.config();

app.use(cors());
app.use(express.json());

app.use('/api',authRoute);

app.listen(port,()=>{
    console.log(`Server is live at port : ${port}`);
})