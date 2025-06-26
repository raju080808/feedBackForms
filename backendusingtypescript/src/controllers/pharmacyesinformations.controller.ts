import { Request, Response } from "express";
import { pharmacyValidationSchema } from "../models/pharmacyinformation";
import { savePharmacyInformation } from "../services/pharmacyinformation.services";

export const submitPharmacyInformation = async (req: Request, res: Response) => {
  // Validate input
  const { error } = pharmacyValidationSchema.validate(req.body);
  if (error) {
    res.status(400).json({ message: error.details[0].message });
    return;
  }

  try {
    await savePharmacyInformation(req.body);
    res.status(201).json({ message: "Pharmacy registered successfully" });
  } catch (err) {
    console.error("Failed to save pharmacy:", err);
    res.status(500).json({ message: "Failed to save pharmacy", error: err });
  }
};
