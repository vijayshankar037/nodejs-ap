import * as express from 'express';

let app: express.Application = express();

app.listen(5000,() => {
  console.log("server listing on port 5000")
});

app.get("/login",(req,res)=>{
  const data = {first_name: 'vijay', last_name:'shankar'}
  //res.send('success');
  //res.json([{firstName: "Joney",lastName: "Singh"},{firstName: "Jon",lastName: "kumar"}]) 
  res.send(data);
})

app.get("/test",(req,res)=>{
  res.send("testing route");
})
