import express, { Request, Response } from 'express';
import { UserController } from './user.controller';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
import { UserValidation } from './user.validation';
const router = express.Router();
router.post(
  '/create-user',
  FileUploadHelper.upload.single('hasan_file'),
  async (req: Request, res: Response, next) => {
    req.body = UserValidation.createStudentZodSchema.parse(JSON.parse(req.body.data));
    return UserController.createUser(req, res, next);
  }
);
export const UserRoute = router;
