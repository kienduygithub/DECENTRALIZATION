import Home from '../container/Home/Home';
import Login from '../container/Login/Login';
import Register from '../container/Register/Register';

const routes = [
    {
        path: '/',
        element: <Home />,
        isShowHeader: true
    },
    {
        path: '/login',
        element: <Login />,
        isShowHeader: false
    },
    {
        path: '/register',
        element: <Register />,
        isShowHeader: false
    },
    {
        path: '*',
        element: (<div>404 NOT FOUND</div>),
        isShowHeader: true
    },
];

export default routes;