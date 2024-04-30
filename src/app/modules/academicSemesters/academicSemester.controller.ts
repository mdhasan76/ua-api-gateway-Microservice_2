import { NextFunction, Response } from 'express';
import { academicSemesterService } from './academicSemester.service';
import sendResponse from '../../../shared/response';

const insertIntoDB = async (req: Request, res: Response, nextFn: NextFunction) => {
  try {
    const result = await academicSemesterService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (err) {
    nextFn(err);
  }
};
export const academicSemesterController = { insertIntoDB };
