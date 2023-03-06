import { Router } from "express";
import teacher from "../controller/teacher";
import validate from "../middleware/validate";
import { teacherCheck } from "../zod.schema/zod.school";

const router = Router()

router.post('/', validate(teacherCheck), teacher.add)
router.get('/', teacher.all)
router.get('/:id', teacher.byId)

export default router;