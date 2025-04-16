import Joi from "joi";

export const newUserValidator = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPasword: Joi.ref('password')
    
}).with('password', 'confirmPasword')

export const loginValidator = Joi.object().keys({
    username: Joi.string().optional(),
    email: Joi.string().email().optional(),
    password: Joi.string().required(),
});