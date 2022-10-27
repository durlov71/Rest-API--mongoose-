const express=require('express');

const mongoose=require('mongoose');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/AllinOne',{
    useNewurlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("Database is connected"))
.catch((err)=>console.log(err));

const userRoute=require("./routes/user");
const taskRoute=require("./routes/task");

app.use(userRoute);
app.use(taskRoute);



const port = process.env.PORT || 4040
app.listen(port,()=>console.log(`server is running at port : {$port}`))



 


