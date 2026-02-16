const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req,res) =>{

res.send('Subscribe to this channel at PORT' + PORT);



}



);

app.listen(PORT, () => {
    console.log('Server started at PORT' + PORT)
});