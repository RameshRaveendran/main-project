const express = require('express');
const router = express.Router();


router.get('/login',(req , res) => {
    res.send("this is from user login")
});



module.exports = router;