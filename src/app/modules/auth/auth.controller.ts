import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { AuthServices } from './auth.service';
import sendResponse from '../../../shared/response';

const logIn = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthServices.logIn(req);
  sendResponse(res, result);
});
export const AuthController = { logIn };
