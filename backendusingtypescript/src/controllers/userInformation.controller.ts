import {Request,Response} from "express";
import { userInformationValidationSchema } from "../models/usersinformation";
import { saveUserInfromation } from "../services/userInformation.services";
export const submitUserInformation=async(req:Request,res:Response)=>{
    
     const { error } = userInformationValidationSchema.validate(req.body);
      if (error) {
        res.status(400).json({ message: error.details[0].message });
        return;
      }
       try {
          await saveUserInfromation(req.body);
          res.status(201).json({ message: "user saved successfully" });
        } catch (err:any) {
          // console.error(err);
          // res.status(500).json({ message: "Failed to save user", error: err });
          

    if (err.code === 11000) {
      res.status(409).json({ message: "Error: Duplicate user (email already exists)" });
      return;
    }
     console.error("MongoDB Error:", err);
    res.status(500).json({ message: "Failed to save user", error: err.message });
        }
}