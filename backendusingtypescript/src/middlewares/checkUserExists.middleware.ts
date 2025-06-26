import { Request, Response, NextFunction } from "express";
import UserInformation from "../models/usersinformation"; 
import { userFeedbackValidationSchema } from "../models/userFeedBack";
export const checkUserExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  
  try {
    const { error } = userFeedbackValidationSchema.validate(req.body);
    if (error) {
       res.status(400).json({ message: error.details[0].message });
       
    }
    const { email } = req.body;

    if (!email) {
      res.status(400).json({ message: "Email is required for verification." });
      return;
    }

    const user = await UserInformation.findOne({ email: email.toLowerCase().trim() });

    if (!user) {
      res.status(403).json({ message: "User not found. Please register first." });
      return;
    }

    // ✅ User exists, proceed
    next();
  } catch (error) {
    console.error("Error checking user existence:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
