/**/ 
const express = require("express");
const path = require("path");
let app = express();
const port = 3000;
app.use(express.static(path.join(__dirname,'public')))
app.get('/',(req,res)=>{
  res.sendFile('index.html')
})
app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});