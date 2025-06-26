import pharmacyFeedBack from "../models/pharmacyFeedBack";
export const getAllPharmacyFeedback=async()=>{
    return await pharmacyFeedBack.find().sort({createdAt: -1});
}