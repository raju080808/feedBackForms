import PharmacyInformation, { IPharmacyInformation } from "../models/pharmacyinformation";

export const savePharmacyInformation = async (data: IPharmacyInformation): Promise<IPharmacyInformation> => {
  const pharmacy = new PharmacyInformation(data);
  return await pharmacy.save();
};
