const express = require('express');
const passport = require('../../config/passport');
const router = express.Router();

//Login Route
router.post('/login',
    passport.authenticate('local'),
    (req, res) => {
        //Return the authenticated user object
        res.send(req.user);
    });

//Logout Route
router.post('/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
});

module.exports = router;
