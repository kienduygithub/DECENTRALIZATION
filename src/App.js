import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from './store/actions';
import DefaultComponent from './container/Default/Default';
import routes from './routes/index';
function App(props) {
    return (
        <Router>
            <div className="app-container">
                <Switch>
                    {
                        routes.map((route, index) => {
                            let path = route.path;
                            let element = route.element;
                            let isShowHeader = route.isShowHeader;
                            return (
                                <Route key={index} path={path} exact={true}>
                                    <DefaultComponent isShowHeader={isShowHeader} element={element} />
                                </Route>
                            )
                        })
                    }
                </Switch>
            </div>
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
