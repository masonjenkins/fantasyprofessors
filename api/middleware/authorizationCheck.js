const jwt = require('jsonwebtoken')
const HttpError = require('../models/httpError')
const secrets = require('../environment')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        if(!token) {
            throw new Error('Failed to authenticate user.')
        }
        const decodedToken = jwt.verify(token, secrets.jwtSecret)
        req.userRole = { isAdmin: decodedToken.isAdmin }
        next()
    } catch (e) {
        return next(new HttpError('Failed to authenticate user.', 401))
    }
}