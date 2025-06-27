import mongoose, {Schema,Document} from "mongoose";
import Joi from "joi";
export interface Iuserinformaton extends Document{
    fullName: string;
    mobileNumber: number;
    email: string;
}
export const userInformationValidationSchema=Joi.object({
   fullName: Joi.string().trim().required().messages({
       'any.required': 'Full name is required',
       'string.empty': 'Full name cannot be empty',
     }),
     mobileNumber: Joi.number()
  .integer()
  .min(1000000000)
  .max(9999999999)
  .required()
  .messages({
    "number.base": "Mobile number must be a number",
    "number.min": "Mobile number must be 10 digits",
    "number.max": "Mobile number must be 10 digits",
    "any.required": "Mobile number is required",
  }),

     email: Joi.string().trim().lowercase().email().required().messages({
       'string.email': 'Please provide a valid email address',
       'any.required': 'Email is required',
     }),
})
const userInformationSchema=new Schema<Iuserinformaton>(
    {
        fullName: { type: String, required: true, trim: true },
        mobileNumber: { type: Number, required: true },
        email: { type: String, required: true, lowercase: true, trim: true, unique:true },
    }
)
const userInfromation=mongoose.model<Iuserinformaton>('userInformation',userInformationSchema);
export default userInfromation;