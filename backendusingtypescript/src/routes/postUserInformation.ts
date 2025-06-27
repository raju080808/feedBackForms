import express from "express";
import { submitUserInformation } from "../controllers/userInformation.controller";
const router = express.Router();
/**
 * @swagger
 * /saveuser:
 *   post:
 *     summary: Submit user information
 *     tags: [User Information]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - fullName
 *               - mobileNumber
 *               - email
 *             properties:
 *               fullName:
 *                 type: string
 *                 example: Jane Doe
 *               mobileNumber:
 *                 type: number
 *                 example: "9876543210"
 *               email:
 *                 type: string
 *                 example: janedoe@example.com
 *     responses:
 *       201:
 *         description: User information submitted successfully
 *       409:
 *         description: User already exists
 *       400:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */

router.post("/", submitUserInformation);

export default router;