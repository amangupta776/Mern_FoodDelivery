const express=require('express');
const app=express();
const dbConnect=require("./connection")
dbConnect();
app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

  
app.use(express.json())
app.use('/api',require("./Routers/CreateUser"));
app.use('/api',require("./Routers/data"));

app.listen(4000,()=>{
    console.log("Listining port At 4000")
})