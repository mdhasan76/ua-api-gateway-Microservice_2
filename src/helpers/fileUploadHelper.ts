import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import * as fs from 'fs';

cloudinary.config({
  cloud_name: 'dwdl0nhmw',
  api_key: '468764859347325',
  api_secret: 'dlvCPK0cNLvzK9Fh36mNCIjFk4Q'
});

const saveFileOnStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uplode/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: saveFileOnStorage });

const uploadToCloudinary = async (file: any) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      file.path,
      // { public_id: file.originalname },
      function (error: any, result: any) {
        fs.unlinkSync(file.path);
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};
export const FileUploadHelper = { uploadToCloudinary, upload };
