import express from 'express';
import { academicSemesterController } from './academicSemester.controller';
const router = express.Router();

router.post('/create-academic-semester', academicSemesterController.insertIntoDB);

export const academicSemesterRoute = router;
