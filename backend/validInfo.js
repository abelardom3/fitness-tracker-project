const { check, validationResult } = require('express-validator')

const validLogin = [
    check("email").not().notEmpty().withMessage("Required").isEmail().withMessage("Invalid Email"),
    check("password").not().notEmpty().withMessage("Required")
]




module.exports = validLogin