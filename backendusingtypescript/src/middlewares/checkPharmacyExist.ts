import { Request, Response, NextFunction } from "express";
import PharmacyInformation from "../models/pharmacyinformation";
import { pharmacyFeedbackValidationSchema } from "../models/pharmacyFeedBack";
export const checkPharmacyExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Validate input
    const { error } = pharmacyFeedbackValidationSchema.validate(req.body);
    if (error) {
      res.status(400).json({ message: error.details[0].message });
      return;
    }

    const { email } = req.body;

    if (!email) {
      res.status(400).json({ message: "Email is required for verification." });
      return;
    }

    const pharmacy = await PharmacyInformation.findOne({
      email: email.toLowerCase().trim(),
    });

    if (!pharmacy) {
      res.status(403).json({ message: "Pharmacy not found. Please register first." });
      return;
    }

    // ✅ Pharmacy exists
    next();
  } catch (error) {
    console.error("Error checking pharmacy existence:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
