var router = require('express').Router();

router.get("/", function(req, res) {
    if (req.isAuthenticated()) {
        if (req.user.role === 'Standard') {
            req.logout();

            req.session.previousUrl = '';

            res.redirect('/login-admin');
        } else {
            res.render('admin');
        }
    } else {
        req.session.previousUrl = '/admin';

        res.redirect('/login-admin');
    }
});


module.exports = router;