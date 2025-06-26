import { Request, Response, NextFunction } from "express";
import UserInformation from "../models/usersinformation";
import PharmacyInformation from "../models/pharmacyinformation";
import { userFeedbackValidationSchema } from "../models/userFeedBack";
import { pharmacyFeedbackValidationSchema } from "../models/pharmacyFeedBack";

export const checkFeedbackSource = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { feedbackType, email } = req.body;

    if (!email) {
      res.status(400).json({ message: "Email is required for verification." });
      return;
    }

    if (feedbackType === "user") {
      const { error } = userFeedbackValidationSchema.validate(req.body, { abortEarly: false });
      if (error) {
        res.status(400).json({ message: error.details.map(e => e.message).join(", ") });
        return;
      }

      const user = await UserInformation.findOne({ email: email.toLowerCase().trim() });
      if (!user) {
        res.status(403).json({ message: "User not found. Please register first." });
        return;
      }

    } else if (feedbackType === "pharmacy") {
      const { error } = pharmacyFeedbackValidationSchema.validate(req.body, { abortEarly: false });
      if (error) {
        res.status(400).json({ message: error.details.map(e => e.message).join(", ") });
        return;
      }

      const pharmacy = await PharmacyInformation.findOne({ email: email.toLowerCase().trim() });
      if (!pharmacy) {
        res.status(403).json({ message: "Pharmacy not found. Please register first." });
        return;
      }

    } else {
      res.status(400).json({ message: "Invalid feedback type." });
      return;
    }

    // ✅ If everything passed, call next
    console.log(feedbackType, "---------------------------------------------------");
    next();

  } catch (error) {
    console.error("Error in feedback middleware:", error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};
