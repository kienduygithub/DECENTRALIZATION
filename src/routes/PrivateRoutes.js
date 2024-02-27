import { useEffect } from "react";
import {
    Route
} from "react-router-dom";
import { useHistory } from "react-router-dom";
const PrivateRoutes = (props) => {
    const history = useHistory();
    useEffect(() => {
        const session = sessionStorage.getItem('account');
        if (!session) {
            history.push('/login');
            window.location.reload();
        }
    }, []);
    return (
        <>
            <Route path={props.path} component={props.component} />
        </>
    )
}

export default PrivateRoutes;