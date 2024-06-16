const express = require('express')
const app = express()
// views ejs view 

app.set('view engine', 'ejs');
app.use(logger)

app.get('/', (req, res) => {
    console.log('here')
    res.render('index', { text: 'World' }) 
   
}) //route


const userRouter = require('./routes/users')

app.use('/users', userRouter) // it is like calling the mini applications

function logger(req, res, next) {
    console.log(`${req.originalUrl} - ${new Date().toISOString()}`)
    next()
} // this is a middleware function 

app.listen(3001) // application 

