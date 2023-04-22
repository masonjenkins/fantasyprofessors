const HttpError = require('../models/httpError')

const signup = (req, res, next) => {
    const { email, name, password } = req.body


}

const login = (req, res, next) => {
    const { email, password } = req.body 

    
}

exports.signup = signup;
exports.login = login;