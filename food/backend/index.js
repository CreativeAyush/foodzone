const express = require('express');
const app = express();
const port = 5000;
const mongodb=require("./database");

app.use((req,res,next)=>{ //middleware next function execute hojaye iske bad
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type,Accept"
  );
  next();
})
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api',require("./routes/createuser"));
app.use('/api',require("./routes/DisplayData"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})