import Joi from "joi";
import validate from "./validate";

const registerSchema = Joi.object({
  fisrtName: Joi.string().trim().min(2).max(250).required(),
  lastName: Joi.string().trim().min(2).max(250).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(250)
    .trim()
    .required(),
  password: Joi.string()
    .pattern(
      new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+]).{0,}$")
    )
    .min(8)
    .max(255)
    .required(),
});
const validateRegisterSchema = (userInputs) =>
  validate(registerSchema, userInputs);
export default validateRegisterSchema;
