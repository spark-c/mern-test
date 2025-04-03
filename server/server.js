import express from 'express';
const router = require('./routes/routes');

const app = express()
const port = 8000;

app.use(express.static(__dirname + 'public'))
app.use("/", router)



app.listen(port, () => {
    console.log(`the app is listening on port ${port}.`)
})