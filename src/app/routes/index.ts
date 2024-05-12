import express from 'express';
import { academicSemesterRoute } from '../modules/academicSemesters/academicSemester.route';
import { UserRoute } from '../modules/user/user.route';
import { AuthRoute } from '../modules/auth/auth.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/academic-semesters',
    routes: academicSemesterRoute
  },
  {
    path: '/users',
    routes: UserRoute
  },
  {
    path: '/auth',
    routes: AuthRoute
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
