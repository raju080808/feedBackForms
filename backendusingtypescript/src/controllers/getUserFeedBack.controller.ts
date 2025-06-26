import { Request,Response } from "express";
import { getAllUserFeedBack } from "../services/getUSerfeedback.services";
export const getUserFeedBackController=async(req:Request,res:Response)=>{
     try {
    const feedbacks = await getAllUserFeedBack();
    res.status(200).json({
      message: "User feedback fetched successfully",
      data: feedbacks,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to fetch user feedback",
      error: error.message || error,
    });
  }
}