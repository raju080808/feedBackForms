import mongoose, { Schema, Document } from "mongoose";
import Joi from "joi";

export interface IPharmacyInformation extends Document {
  pharmacyName: string;
  contactPersonName: string;
  mobileNumber: string;
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
  mobileNumber: Joi.string().pattern(/^\d{10}$/).required().messages({
    "string.pattern.base": "Mobile number must be exactly 10 digits",
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
    mobileNumber: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, trim: true, unique: true },
  },
  { timestamps: true }
);

const PharmacyInformation = mongoose.model<IPharmacyInformation>(
  "PharmacyInformation",
  pharmacySchema
);

export default PharmacyInformation;
