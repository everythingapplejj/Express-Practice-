const express = require("express")
const router = express.Router()

router.use(logger) // this is a middleware function
//router.get gets information from the server

router.get('/', (req, res) => {
    res.send('User List')
})

router.get('/new', (req, res) => {
    res.render('users/new')
})

//router.post will send the information to the server

router.post('/', (req, res) => {
    console.log(req.body.firstName)
    res.send('hello user')
}) // lets see the usage of this 

router.route('/:id')
  .get((req, res) => {
    const userId = req.params.id;
    console.log(req.user)
    res.send(`Get User With ID ${userId}`);
  })
  .put((req, res) => {
    const userId = req.params.id;
    res.send(`Update User With ID ${userId}`);
  })
  .delete((req, res) => {
    const userId = req.params.id;
    res.send(`Delete User With ID ${userId}`);
  });
 // this is for everything

  const users = [{name : "computer science"}, {name: "computer engineering"}]
router.param("id", (req, res, next, id) => {
    req.user = users[id] // request can be accessible anywhere in the file
    next()
})


function logger(req, res, next) {
    console.log(`${req.originalUrl} - ${new Date().toISOString()}`)
    next()
} // this is a middleware function 

module.exports = router