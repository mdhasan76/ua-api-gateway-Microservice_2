import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';
import { RedisClient } from '../../../shared/redis';
import { AuthService, CoreService } from '../../../shared/axios';

const createUser = async (req: Request): Promise<any> => {
  const fileUpload = await FileUploadHelper.uploadToCloudinary(req.file);
  const payload = req.body.student;
  if (fileUpload) {
    payload.profileImage = fileUpload.secure_url;
  }
  await CoreService.put('/academic-semesters//profile-image-upload-testing', req.body);
  console.log(fileUpload, 'file upload');
};
export const UserService = { createUser };
