import { AuthService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';
import { Request } from 'express';

const logIn = async (req: Request): Promise<IGenericResponse> => {
  const response: any = await AuthService.post('/auth/login', req.body);
  return response;
};

export const AuthServices = { logIn };
