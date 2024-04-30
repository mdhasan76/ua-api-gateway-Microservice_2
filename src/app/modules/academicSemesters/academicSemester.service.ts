import { Request } from 'express';
import { CoreService } from '../../../shared/axios';

const insertIntoDB = async (req: Request) => {
  const response = await CoreService.post(
    '/academic-semesters/create-academic-semester',
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};
export const academicSemesterService = { insertIntoDB };
