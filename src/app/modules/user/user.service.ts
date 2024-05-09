import { Request } from 'express';
import { FileUploadHelper } from '../../../helpers/fileUploadHelper';

const createUser = async (req: Request): Promise<any> => {
  const fileUpload = await FileUploadHelper.uploadToCloudinary(req.file);
  console.log(fileUpload, 'file upload');
};
export const UserService = { createUser };
