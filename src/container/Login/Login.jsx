import React from "react";
import './Login.scss';
import { connect } from "react-redux";
import {
    NavLink, useHistory
} from 'react-router-dom';

const Login = () => {
    const navigate = useHistory();
    return (
         <div className="login-container d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row px-3 px-sm-0">
                    <div className="content-left col-7 d-none d-sm-flex d-sm-flex flex-column justify-content-center">
                        <div className="brand">
                            Kiến Duy
                        </div>
                        <div className="detail">
                            Learn everything
                        </div>
                    </div>
                    <div className="content-right col-12 col-sm-5 d-flex flex-column py-3 gap-2">
                        <span className="mobile-brand text-center d-sm-none d-block">Kiến Duy</span>
                        <input type="text" className="form-control" placeholder="Email address or phone number" />
                        <input type="password" className="form-control" placeholder="Password"/>
                        <button className="btn btn-primary">Login</button>
                        <span className="forgot-password text-center">
                            Forgot your password?
                        </span>
                        <hr />
                        <div className="text-center">
                            <button className="btn btn-success" onClick={() => navigate.push('/register')}>Create new account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Login);