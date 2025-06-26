import Joi from "joi";

export const baseFeedbackFields = {
  feedbackType: Joi.string().valid('user', 'pharmacy').required().messages({
    'any.only': 'feedbackType must be either "user" or "pharmacy"',
    'any.required': 'feedbackType is required',
  }),
  email: Joi.string().pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).trim().lowercase().email().required().messages({
    'string.email': 'Please provide a valid email address',
    'any.required': 'Email is required',
  }),
};
