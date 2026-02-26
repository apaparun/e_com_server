const {validationResult} = require('express-validator')

exports.register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => ({
            field: error.path,
            message:error.msg
        }))
        return res.status(400).json({errors: errorMessages})
        // console.log(errors);
    }
    
}

exports.login = async (req, res) => {
    return res.status(201).json({'name':'Arun','age':27})
}
exports.forgotPassword = async (req, res) => {
    
}
exports.verifyPasswordResetOpt = async (req, res) => {
    
}
exports.resetPassword = async (req, res) => {
    
}