const ApiError = require("../error/api_error")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/model')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}
class UserController{
    async registration(req, res, next){
        const { email, password, role, fullName, phone, gender } = req.body;
        if (!email || !password || !fullName || !phone || !gender) {
            return next(ApiError.bad_request('Заполните все обязательные поля!!!'));
        }
        if(!email || !password)
        {
            return next(ApiError.bad_request('Некорректный адрес электронной почты или пароль!!!'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate)
        {
            return next(ApiError.bad_request('Пользователь с таким адресом электронной почты уже существует!!!'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword, fullName, phone, gender})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})

    }

    async login(req, res, next){
            const {email, password} = req.body
            const user = await User.findOne({where: {email}})
            if(!user)
            {
                return next(ApiError.internal('Данный пользователь не найден!!!'))
            }
            let comparePassword = bcrypt.compareSync(password, user.password)
            if(!comparePassword)
            {
                return next(ApiError.internal('Указан неверный пароль!!! Проверьте корректность ввода!'))
            }
            const token = generateJwt(user.id, user.email, user.role)
            return res.json({token})
    }

    async check(req, res, next){
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()