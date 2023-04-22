const HttpError = require('../models/httpError')
const { validationResult } = require('express-validator');

const signup = (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return next(new HttpError('Invalid API Call arguments. Try again with correct params.', 400))
    }
    const { email, name, password } = req.body


}

const login = (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return next(new HttpError('Invalid API Call arguments. Try again with correct params.', 400))
    }
    const { email, password } = req.body 


}

exports.signup = signup;
exports.login = login;