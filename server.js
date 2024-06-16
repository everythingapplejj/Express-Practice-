const express = require('express')
const app = express()


app.get('/', (req, res) => {
    console.log('here')
    res.status(500).json({message: "error"}) // usage with API
   
}) //route


app.listen(3001)

