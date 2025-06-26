import express from "express";
import userInfromation, {Iuserinformaton} from "../models/usersinformation";
export const saveUserInfromation = async (data: Iuserinformaton) => {
  const feedback = new userInfromation(data);
  return await feedback.save();
};
export default userInfromation;