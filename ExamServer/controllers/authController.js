const router = require('express').Router();
const authService = require('../services/authService.js');

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // const token = await authService.login(username, password);
        await authService.login(username, password);

        res.json({ message: 'Logged in!' });
        res.end();
    } catch (error) {
        res.status(400).json({ message: error.message });
        res.end();
    }
});

router.post('/register', async (req, res) => {
    const { username, email, password, repass } = req.body;

    try {
        await authService.register(username, email, password, repass);

        res.json({ message: 'Registered!' });
        res.end();
    } catch (error) {
        res.status(400).json({ message: error.message });
        res.end();
    }
});

router.get('/logout', (req, res) => {
    res.json({ message: 'Logged out' });
    res.end();
    // if (req.user) {
    //     return res.redirect('/');
    // }

    // res.clearCookie('auth');
    // res.redirect('/')
});

module.exports = router;