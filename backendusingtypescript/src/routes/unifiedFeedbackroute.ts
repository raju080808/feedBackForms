import express from "express";
import { submitUnifiedFeedbackform } from "../controllers/unifiedPostFeedback.comtroller";
import { checkFeedbackSource } from "../middlewares/unifiedmiddleware";
/**
 * @swagger
 * /unifiedfeedbacks:
 *   post:
 *     summary: Submit unified feedback (user or pharmacy)
 *     description: Submit feedback by specifying the feedback type (`user` or `pharmacy`) along with the required fields for that type.
 *     tags:
 *       - Submit Feedbacks
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             oneOf:
 *               - $ref: '#/components/schemas/UserFeedback'
 *               - $ref: '#/components/schemas/PharmacyFeedback'
 *           examples:
 *             userFeedbackExample:
 *               summary: Example for user feedback
 *               value:
 *                 feedbackType: user
 *                 fullName: "Jaya Raju"
 *                 mobileNumber: 9908089697
 *                 email: "jaya@gmail.com"
 *                 orderId: "ORD123"
 *                 issueType: "Delivery"
 *                 feedBackMessage: "Quick delivery, thanks!"
 *                 rating: 5
 *             pharmacyFeedbackExample:
 *               summary: Example for pharmacy feedback
 *               value:
 *                 feedbackType: pharmacy
 *                 pharmacyName: "ABC Pharmacy"
 *                 contactPersonName: "Dr. Reddy"
 *                 mobileNumber: 9876543210
 *                 email: "pharmacy@example.com"
 *                 feedBackCategory: "Support"
 *                 feedBackMessage: "Need faster support"
 *                 rating: 4
 *     responses:
 *       200:
 *         description: Feedback submitted successfully
 *       400:
 *         description: Validation error or invalid feedback type
 *       403:
 *         description: User or pharmacy not registered
 *       500:
 *         description: Server error
 */
const router = express.Router();
router.post("/", checkFeedbackSource, submitUnifiedFeedbackform);

router.get("/test", (req, res) => {
  res.json({ message: "Unified feedback router is working!" });
});

console.log("Unified route loaded");
export default router;
