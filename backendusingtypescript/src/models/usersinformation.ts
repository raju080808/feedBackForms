import mongoose, {Schema,Document} from "mongoose";
import Joi from "joi";
export interface Iuserinformaton extends Document{
    fullName: string;
    mobileNumber: string;
    email: string;
}
export const userInformationValidationSchema=Joi.object({
   fullName: Joi.string().trim().required().messages({
       'any.required': 'Full name is required',
       'string.empty': 'Full name cannot be empty',
     }),
     mobileNumber: Joi.string().pattern(/^\d{10}$/).required().messages({
       'string.pattern.base': 'Mobile number must be exactly 10 digits',
       'any.required': 'Mobile number is required',
     }),
     email: Joi.string().trim().lowercase().email().required().messages({
       'string.email': 'Please provide a valid email address',
       'any.required': 'Email is required',
     }),
})
const userInformationSchema=new Schema<Iuserinformaton>(
    {
        fullName: { type: String, required: true, trim: true },
        mobileNumber: { type: String, required: true },
        email: { type: String, required: true, lowercase: true, trim: true, unique:true },
    }
)
const userInfromation=mongoose.model<Iuserinformaton>('userInformation',userInformationSchema);
export default userInfromation;