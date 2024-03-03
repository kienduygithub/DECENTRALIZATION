import userRouter from './userRouter';
import groupRouter from './groupRouter';

const configWebRoutes = (app) => {

    app.use('/api', userRouter);
    app.use('/api', groupRouter);
    app.get('/', (req, res) => {
        return res.render('user');
    });
}

export default configWebRoutes;