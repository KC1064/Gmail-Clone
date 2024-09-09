import express from "express"; 
import { createEmail, deleteEmail, getAllEmailById } from "../controllers/email.controller.js";
import isAuthenticated from "../middleware/isAuthenticated.js";

const router = express.Router();

router.route("/create").post( createEmail);
router.route("/:id").delete(deleteEmail);
router.route("/getallemails").get(getAllEmailById);


export default router;
