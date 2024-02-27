import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import {
    Flip,
    ToastContainer
} from 'react-toastify'
import {
    BrowserRouter as Router
} from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from './store/actions';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import AppRoutes from './routes/AppRoutes';
function App(props) {
    const [ account, setAccount ] = useState({});
    useEffect(() => {
        const session = sessionStorage.getItem('account');
        if (session) {
            setAccount(JSON.parse(session));
        }
    }, []);
    return (
        <Router>
            <div className='app-header'>
                <Header />
            </div>
            <div className="app-container">
                <AppRoutes />
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Flip}
            />
        </Router>
    );
}

const mapStateToProps = (state) => ({
    count: state.count.count,
})
const mapDispatchToProps = (dispatch) => ({
    increase: () => dispatch(actions.increaseCount()),
    decrease: () => dispatch(actions.decreaseCount())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
