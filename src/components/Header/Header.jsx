import React, { useContext, useEffect, useState } from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import {
    NavLink,
    useHistory,
    useLocation
} from 'react-router-dom';
import {
    UserContext
} from '../../context/UserContext'
const Header = (props) => {
    const history = useHistory();
    const location = useLocation();
    const [ isShow, setIsShow ] = useState(true);
    const { user } = useContext(UserContext);
    useEffect(() => {
        const pathname = location.pathname;
        if (pathname === '/login' || pathname === '/register' || user && user.isAuthenticated === false) {
            setIsShow(false);
        }
    }, [location.pathname])
    return (
        <>
            {
                isShow || location.pathname === '/' || user.isAuthenticated === true? 
                    <div className='header-container'>
                        <div className="topnav">
                            <NavLink to="/" exact>Home</NavLink>
                            <NavLink to="/users">Users</NavLink>
                            <NavLink to="/projects">Projects</NavLink>
                            <NavLink to="/about">About</NavLink>
                        </div> 
                    </div>
                    :
                    <></>
            }
        </>
    )
}

const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(Header);