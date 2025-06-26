import express ,{ Request,Response } from "express";
import { getAllPharmacyFeedback } from "../services/getPharmacyFeedback.services";
export const getPharmacyFeedbackController=async(req:Request,res:Response)=>{
     try {
        const feedbacks = await getAllPharmacyFeedback();
        res.status(200).json({
          message: "Pharmacy feedback fetched successfully",
          data: feedbacks,
        });
      } catch (error: any) {
        res.status(500).json({
          message: "Failed to fetch Pharmacy feedback",
          error: error.message || error,
        });
      }
}