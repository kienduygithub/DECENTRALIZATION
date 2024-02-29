import userRouter from './userRouter';
import groupRouter from './groupRouter';
const configWebRoutes = (app) => {
    app.use('/api/user', userRouter);
    app.use('/api/group', groupRouter);
    app.get('/', (req, res) => {
        return res.render('user');
    });
}

export default configWebRoutes;