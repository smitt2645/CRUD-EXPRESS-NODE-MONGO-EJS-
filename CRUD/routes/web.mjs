import { Router } from "express";
import StudentController from "../controllers/StudentController.mjs";

const router = Router();

router.get("/",StudentController.getAllDoc);
router.post("/",StudentController.createDoc);
router.get("/:id",StudentController.editDoc);
router.post("update/:id",StudentController.updateDocById);
router.post("delete/:id",StudentController.deleteDocById);



export default router;