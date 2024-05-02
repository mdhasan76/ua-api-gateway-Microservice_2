import { Request } from 'express';
import { CoreService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.post(
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

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  console.log(req.query, 'params');
  const response: IGenericResponse = await CoreService.get('/academic-semesters', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const getOneById = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get(
    `/academic-semesters/${req.params.academicSemesterId}`,
    {
      params: req.query,
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const academicSemesterService = { insertIntoDB, getAllFromDB, getOneById };
