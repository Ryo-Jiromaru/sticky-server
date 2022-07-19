const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get("/", (req:any, res:any) =>{
    res.send(`hello`);
});

app.listen(port, () => {
    console.log(`listening on *:${port}`);
})