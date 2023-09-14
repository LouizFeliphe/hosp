const express = require('express');
const router = express.Router()



router.post('/', (req, res) => {
    const { name } = req.body
    console.log(name)
    res.status(401).send('Please Provide Credentials')
})

module.exports = router

