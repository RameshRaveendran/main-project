const express = require('express');
const router = express.Router();


router.get('/login', (req, res) => {
    res.render('user/login')
});

router.get('/register', (req, res) => {
    res.render('user/register')
});
// post register route
router.post('/register', (req, res) => {
    console.log('======================')
    console.log(req.body);
    res.json(req.body)
})




module.exports = router;