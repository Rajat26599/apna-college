const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {
    const user = req.body;
    if(user.name === 'user' && user.password === 123) {
        res.json({
            username: user.name,
            loggedin: true,
        })
    } else {
        res.json({
            loggedin: false,
        })
    }
})

module.exports = router;