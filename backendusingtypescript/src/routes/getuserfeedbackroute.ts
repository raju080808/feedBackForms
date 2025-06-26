import express from "express";
import { getUserFeedBackController } from "../controllers/getUserFeedBack.controller";

/**
 * @swagger
 * /getuser:
 *   get:
 *     summary: Retrieve all user feedback entries
 *     tags: [User Feedback]
 *     responses:
 *       200:
 *         description: A list of user feedback
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   fullName:
 *                     type: string
 *                     example: Jane Doe
 *                   mobileNumber:
 *                     type: string
 *                     example: "9876543210"
 *                   email:
 *                     type: string
 *                     example: jane@example.com
 *                   orderId:
 *                     type: string
 *                     example: ORD123456
 *                   issueType:
 *                     type: string
 *                     enum: [Order, Medicine Availability, Delivery, Payment Issue, all Good, others]
 *                   feedBackMessage:
 *                     type: string
 *                   rating:
 *                     type: number
 *       500:
 *         description: Internal server error
 */

const router = express.Router();

router.get("/",getUserFeedBackController);

export default router;
