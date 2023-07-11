const router = require('express').Router();
const authService = require('../services/authService.js');

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const token = await authService.login(username, password);

        res.cookie('auth', token);
        res.send('Ok');
        res.end();
    } catch (error) {
        res.send(error.message);
        res.end();
    }
});

router.post('/register', async (req, res) => {
    const { username, email, password, repass } = req.body;

    try {
        await authService.register(username, email, password, repass);

        res.send('Ok');
        res.end();
    } catch (error) {
        res.send(error);
        res.end();
    }
});

router.get('/logout', (req, res) => {
    if (req.user) {
        return res.redirect('/');
    }
    
    res.clearCookie('auth');
    res.redirect('/')
});

module.exports = router;