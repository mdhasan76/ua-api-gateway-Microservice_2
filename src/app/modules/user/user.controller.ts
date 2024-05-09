import { NextFunction, Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { UserService } from './user.service';
import sendResponse from '../../../shared/response';

const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.createUser(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
});

export const UserController = { createUser };
