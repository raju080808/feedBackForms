import UserFeedback from "../models/userFeedBack";
export const getAllUserFeedBack=async()=>{

  return await UserFeedback.find().sort({ createdAt: -1 });
}