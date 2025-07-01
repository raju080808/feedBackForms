// models/userFeedBack.ts
import mongoose, { Schema, Document } from "mongoose";
import { baseFeedbackFields } from "./baseFeedback";
import Joi from "joi";
export interface IUserFeedback extends Document {
 
  fullName: string;
  mobileNumber: number;
  email: string;
  orderId: string;
  issueType: 'Order' | 'Medicine Availability' | 'Delivery' | 'Payment Issue' | 'all Good' | 'Others';
  feedBackMessage?: string;
  rating?: number;
}

export const userFeedbackValidationSchema = Joi.object({
 
      ...baseFeedbackFields,
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
  orderId: Joi.string().trim().required().messages({
    'any.required': 'Order ID is required',
  }),
  issueType: Joi.string()
    .valid('Order', 'Medicine Availability', 'Delivery', 'Payment Issue', 'all Good', 'Others')
    .required()
    .messages({
      'any.only': 'Invalid issue type',
      'any.required': 'Issue type is required',
    }),
  feedBackMessage: Joi.string().max(1000).optional().allow('').messages({
   
    'string.max': 'Maximum feedback length is 1000 characters',
    
  }),
  rating: Joi.number().max(5).optional().messages({
    
    'number.max': 'Maximum rating is 5',
    
  }),
}).unknown(true);

const userFeedbackSchema = new Schema<IUserFeedback>(
  {
    fullName: { type: String, required: true, trim: true },
    mobileNumber: { type: Number, required: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    orderId: { type: String, required: true, trim: true },
    issueType: {
      type: String,
      enum: ['Order', 'Medicine Availability', 'Delivery', 'Payment Issue', 'all Good', 'Others'],
      required: true,
    },
    feedBackMessage: { type: String },
    rating: { type: Number, max: 5 },
  },
  { timestamps: true }
);

const UserFeedback = mongoose.model<IUserFeedback>('UserFeedback', userFeedbackSchema);
export default UserFeedback;
