import express from "express";
import { getPharmacyFeedbackController } from "../controllers/getPharmacy.controller";
const router=express.Router();
/**
 * @swagger
 * /getpharmacy:
 *   get:
 *     summary: Retrieve all pharmacy feedback entries
 *     tags: [Pharmacy Feedback]
 *     responses:
 *       200:
 *         description: A list of pharmacy feedback
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   pharmacyName:
 *                     type: string
 *                     example: MedLife Pharmacy
 *                   contactPersonName:
 *                     type: string
 *                     example: Rahul Sharma
 *                   mobileNumber:
 *                     type: string
 *                     example: "9876543210"
 *                   email:
 *                     type: string
 *                     example: rahul@medlife.com
 *                   feedBackCategory:
 *                     type: string
 *                     enum: [Technical, Support, Delivery, Suggestions]
 *                   feedBackMessage:
 *                     type: string
 *                     example: Great support experience.
 *                   rating:
 *                     type: number
 *                     example: 5
 *       500:
 *         description: Internal server error
 */

router.get("/",getPharmacyFeedbackController);
export default router;