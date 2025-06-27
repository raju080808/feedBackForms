import mongoose, { Schema, Document } from "mongoose";
import Joi from "joi";

export interface IPharmacyInformation extends Document {
  pharmacyName: string;
  contactPersonName: string;
  mobileNumber: number;
  email: string;
}

export const pharmacyValidationSchema = Joi.object({
  pharmacyName: Joi.string().trim().required().messages({
    "any.required": "Pharmacy name is required",
    "string.empty": "Pharmacy name cannot be empty",
  }),
  contactPersonName: Joi.string().trim().required().messages({
    "any.required": "Contact person name is required",
    "string.empty": "Contact person name cannot be empty",
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
    "string.email": "Please provide a valid email address",
    "any.required": "Email is required",
  }),
});

const pharmacySchema = new Schema<IPharmacyInformation>(
  {
    pharmacyName: { type: String, required: true, trim: true },
    contactPersonName: { type: String, required: true, trim: true },
    mobileNumber: { type: Number, required: true },
    email: { type: String, required: true, lowercase: true, trim: true, unique: true },
  },
  { timestamps: true }
);

const PharmacyInformation = mongoose.model<IPharmacyInformation>(
  "PharmacyInformation",
  pharmacySchema
);

export default PharmacyInformation;
