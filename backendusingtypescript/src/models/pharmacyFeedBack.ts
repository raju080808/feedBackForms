import mongoose, { Schema, Document } from "mongoose";
import Joi, { required } from "joi";
import { baseFeedbackFields } from "./baseFeedback";
export interface iPharmacyFeedBack extends Document {
  pharmacyName: string;
  contactPersonName: string;
  mobileNumber: number;
  email: string;
  feedBackCategory: 'Technical' | 'Support' | 'Delivery' | 'Suggestions';
  feedBackMessage?: string;
  rating?: number;
}
export const pharmacyFeedbackValidationSchema=Joi.object({
    
    ...baseFeedbackFields,
      pharmacyName:Joi.string().trim().required().messages({
        'any.required': 'Full name is required',
        'string.empty': 'Full name cannot be empty',
      }),
      contactPersonName:Joi.string().trim().required().messages({
        'any.required': 'Contact person name is required',
        'string.empty': 'Contact person name cannot be empty',
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

      email:Joi.string().pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).trim().required().messages({
        'any.required':'Email is required',
        'string.empty':'Email cannot be empty'
      }),
      feedBackCategory:Joi.string()
         .valid('Technical', 'Support', 'Delivery', 'Suggestions')
         .required()
         .messages({
           'any.only': 'Invalid feedback category',
           'any.required': 'Issue type is required',
         }),
          feedBackMessage: Joi.string().max(1000).optional().allow('').messages({
             'string.max': 'Maximum feedback length is 1000 characters',
            
           }),
           rating: Joi.number().max(5).optional().messages({
             'number.max': 'Maximum rating is 5',
           }),

}).unknown(true);
const pharmacyFeedBackSchema: Schema = new Schema(
  {
    
    pharmacyName: {
      type: String,
      required: [true, 'Pharmacy name is required'],
      trim: true
    },
    contactPersonName: {
      type: String,
      required: [true, 'Contact person name is required'],
      trim: true
    },
    mobileNumber: {
      type: Number,
      required: [true, 'Mobile number is required'],
      trim: true,
      validate: {
        validator: function (v: string) {
          return /^\d{10}$/.test(v); // Exactly 10 digits
        },
        message: 'Mobile number must be exactly 10 digits'
      }
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please fill a valid email address'
      ]
    },
    feedBackCategory: {
      type: String,
      required: [true, 'Feedback category is required'],
      enum: ['Technical', 'Support', 'Delivery', 'Suggestions']
    },
    feedBackMessage: {
      type: String,
    
    },
    rating: {
      type: Number,
      max: [5, 'Maximum rating is 5']
    }
  },
  {
    timestamps: true
  }
);

 const pharmacyFeedBack = mongoose.model<iPharmacyFeedBack>('pharmacyFeedBack', pharmacyFeedBackSchema);
 export default pharmacyFeedBack;