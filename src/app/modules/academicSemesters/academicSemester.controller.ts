import { NextFunction, Request, Response } from 'express';
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
const getAllFromDB = async (req: Request, res: Response, nextFn: NextFunction) => {
  try {
    const result = await academicSemesterService.getAllFromDB(req);
    sendResponse(res, result);
  } catch (err) {
    nextFn(err);
  }
};
const getOneById = async (req: Request, res: Response, nextFn: NextFunction) => {
  try {
    const result = await academicSemesterService.getOneById(req);
    sendResponse(res, result);
  } catch (err) {
    nextFn(err);
  }
};
export const academicSemesterController = { insertIntoDB, getAllFromDB, getOneById };
