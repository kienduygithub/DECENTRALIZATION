import React from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import {
    NavLink
} from 'react-router-dom';
const Header = (props) => {

    return (
        <>
            {
                props.isShow === true ? 
                    <div className='header-container'>
                       <div className="topnav">
                            <NavLink to="/" exact>Home</NavLink>
                            <NavLink to="/news">News</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
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