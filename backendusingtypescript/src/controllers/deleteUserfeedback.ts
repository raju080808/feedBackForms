import { Request, Response } from "express";
import UserFeedback from "../models/userFeedBack";

export const deleteUserFeedback = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const deleted = await UserFeedback.findByIdAndDelete(id);
    if (!deleted) {
      res.status(404).json({ error: "User feedback not found" });
      return;
    }

    res.status(200).json({ message: "User feedback deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
