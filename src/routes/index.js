import AuthRouter from './auth/auth.router';

const AppRoutes = (app) => {
    app.use(AuthRouter.routerPrefix, AuthRouter.route());
};

export default AppRoutes;