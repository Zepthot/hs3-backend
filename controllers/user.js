// import
const User = require('../models/User');
// controllers
exports.createUser = (req, res, next) => {
    const userObject = req.body;

    const user = new User({
        ...userObject
    });
    user.save()
        .then(() => res.status(201).json({ message: 'Registered user'}))
        .catch(error => res.status(400).json({ error }));
};