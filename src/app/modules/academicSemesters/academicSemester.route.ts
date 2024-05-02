import express from 'express';
import { academicSemesterController } from './academicSemester.controller';
const router = express.Router();

router.post('/create-academic-semester', academicSemesterController.insertIntoDB);
router.get('/', academicSemesterController.getAllFromDB);
router.get('/:academicSemesterId', academicSemesterController.getOneById);

export const academicSemesterRoute = router;
