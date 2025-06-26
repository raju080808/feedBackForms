import { Request, Response } from "express";
import UserFeedback from "../models/userFeedBack";
import PharmacyFeedback from "../models/pharmacyFeedBack";

type FeedbackType = "user" | "pharmacy";

const feedbackTypeMap: Record<
  FeedbackType,
  {
    model: any;
    successMessage: string;
  }
> = {
  user: {
    model: UserFeedback,
    successMessage: "User feedback submitted",
  },
  pharmacy: {
    model: PharmacyFeedback,
    successMessage: "Pharmacy feedback submitted",
  },
};

export const submitUnifiedFeedbackform = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const feedbackType = req.body.feedbackType as FeedbackType;
    const config = feedbackTypeMap[feedbackType];

    if (!config) {
      res.status(400).json({ error: "Invalid feedback type" });
      return;
    }

    const feedback = new config.model(req.body);
    await feedback.save();

    res.status(200).json({ message: config.successMessage });
  } catch (error: any) {
    if (res.headersSent) {
      console.warn("⚠️ Response already sent — not sending again");
      return;
    }

    res.status(500).json({ error: "Internal server error" });
  }
};
