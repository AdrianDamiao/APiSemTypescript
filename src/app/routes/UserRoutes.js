const UserRoutes = require('express').Router();

UserRoutes.get('/user', (req, res) => {
    return res.status(200).json({
        status: 'ok',
        message: 'UserRoutes'
    })
});

module.exports = UserRoutes;