import mongoose, { Schema, Document } from "mongoose";
import Joi from "joi";
import { baseFeedbackFields } from "./baseFeedback";
export interface iPharmacyFeedBack extends Document {
  pharmacyName: string;
  contactPersonName: string;
  mobileNumber: string;
  email: string;
  feedBackCategory: 'Technical' | 'Support' | 'Delivery' | 'Suggestions';
  feedBackMessage: string;
  rating: number;
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
      mobileNumber:Joi.string().pattern(/^\d{10}$/).trim().required().messages({
        'any.required':'mobile number is requires',
        'string.empty':'mobile number cannot be empty'
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
          feedBackMessage: Joi.string().min(10).max(1000).required().messages({
             'string.min': 'Feedback must be at least 10 characters',
             'string.max': 'Maximum feedback length is 1000 characters',
             'any.required': 'Feedback message is required',
           }),
           rating: Joi.number().min(1).max(5).required().messages({
             'number.min': 'Minimum rating is 1',
             'number.max': 'Maximum rating is 5',
             'any.required': 'Rating is required',
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
      type: String,
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
      required: [true, 'Feedback message is required'],
      minlength: [10, 'Feedback must be at least 10 characters'],
      maxlength: [1000, 'Maximum feedback length is 1000 characters']
    },
    rating: {
      type: Number,
      required: [true, 'Rating is required'],
      min: [1, 'Minimum rating is 1'],
      max: [5, 'Maximum rating is 5']
    }
  },
  {
    timestamps: true
  }
);

 const pharmacyFeedBack = mongoose.model<iPharmacyFeedBack>('pharmacyFeedBack', pharmacyFeedBackSchema);
 export default pharmacyFeedBack;