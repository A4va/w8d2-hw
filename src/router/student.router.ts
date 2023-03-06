import { Router } from "express";
import student from "../controller/student";
import validate from "../middleware/validate";
import { studentCheck } from '../zod.schema/zod.school'

const router = Router()

router.post('/', validate(studentCheck), student.add)
router.get('/', student.all)
router.get('/:id', student.byId)

export default router;