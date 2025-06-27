import express from "express";
import { deleteUserFeedback } from "../controllers/deleteUserfeedback";
import { deletePharmacyFeedback } from "../controllers/deletePharmacyfeedback";

const router = express.Router();

router.delete("/user-feedback/:id", deleteUserFeedback);
router.delete("/pharmacy-feedback/:id", deletePharmacyFeedback);

export default router;
