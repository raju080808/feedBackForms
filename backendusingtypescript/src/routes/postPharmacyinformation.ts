import express from "express";
import { submitPharmacyInformation } from "../controllers/pharmacyesinformations.controller";
const router = express.Router();
/**
 * @swagger
 * /pharmacy:
 *   post:
 *     summary: Register a new pharmacy
 *     tags:
 *       - Save Pharmacy Data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - pharmacyName
 *               - contactPersonName
 *               - mobileNumber
 *               - email
 *             properties:
 *               pharmacyName:
 *                 type: string
 *                 example: HealthPlus Pharmacy
 *               contactPersonName:
 *                 type: string
 *                 example: Ravi Kumar
 *               mobileNumber:
 *                 type: number
 *                 example: "9876543210"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: ravi@healthplus.com
 *     responses:
 *       201:
 *         description: Pharmacy registered successfully
 *       400:
 *         description: Invalid input data
 *       500:
 *         description: Failed to save pharmacy
 */

router.post("/",submitPharmacyInformation)
export default router;