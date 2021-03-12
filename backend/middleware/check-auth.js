const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; //because 'bearer <jwtoken>'
        const decodedToken = jwt.verify(token, 'placeholder_secret_hash_longer');
        req.userData = {email: decodedToken.email, userId: decodedToken.userId}
        next();
    
    } catch (err) {
        res.status(401).json({ err })
    }
}