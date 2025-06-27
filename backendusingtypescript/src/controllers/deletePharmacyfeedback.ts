import { Request, Response } from "express";
import PharmacyFeedback from "../models/pharmacyFeedBack";

export const deletePharmacyFeedback = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const deleted = await PharmacyFeedback.findByIdAndDelete(id);
    if (!deleted) {
      res.status(404).json({ error: "Pharmacy feedback not found" });
      return;
    }

    res.status(200).json({ message: "Pharmacy feedback deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
