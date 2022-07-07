const express = require('express');
const router = express.Router();

router.get("/")
    .all((req, res, next) => {
        console.log(`Request from : ${req.originalUrl}`)
        console.log(`Resquest type : ${req.method}`)
        console.log(`Request params : ${req.params}`)
        next();
    })
    .get((req, res) => {
        console.log(req.params)
        res.send(JSON.stringify([]))
        res.status(200)
        res.end()
    })
    .post((req, res) => {
        console.log(req.body)
        res.status(201)
        res.end()
    })

router
    .param('id', (req, res, next, id) => {
        console.log(`Request from : ${req.params}`)
        console.log(`Request type : ${req.method}`)
        console.log(`Request id : ${id}`)
    })
    .route("/:id")
    .get((req, res) => {
        console.log(`req.params`)
        res.send(JSON.stringify({}))
        res.status(200)
        res.end();
    })
    .put((req, res) => {
        console.log(req.body)
        res.status(203)
        res.end();
    })
    .delete((req, res) => {
        res.status(203)
        res.end();
    })



router.get('/', function (req, res) {
    console.log(req.headers)
    res.write('Hello from express-server')
    res.end()
});

router.post('/posts', router)

module.exports = router;