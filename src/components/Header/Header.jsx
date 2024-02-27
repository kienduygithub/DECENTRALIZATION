import React, { useEffect, useState } from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import {
    NavLink,
    useHistory,
    useLocation
} from 'react-router-dom';
const Header = (props) => {
    const history = useHistory();
    const location = useLocation();
    const [ isShow, setIsShow ] = useState(true);
    useEffect(() => {
        const session = sessionStorage.getItem('account');
        const pathname = location.pathname;
        if (pathname === '/login') {
            setIsShow(false);
        } else {
            setIsShow(true);
        }
    }, [])
    return (
        <>
            {
                isShow ? 
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