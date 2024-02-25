import userRouter from './userRouter';
const configWebRoutes = (app) => {
    app.use('/api/user', userRouter);
    app.get('/', (req, res) => {
        return res.render('user');
    });
}

export default configWebRoutes;