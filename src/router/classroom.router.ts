import { Router } from "express";
import classroom from "../controller/classroom";
import validate from "../middleware/validate";
import { classroomCheck } from '../zod.schema/zod.school'

const router = Router()

router.post('/', validate(classroomCheck), classroom.add)
router.get('/', classroom.all)
router.get('/:id', classroom.byId)

export default router;