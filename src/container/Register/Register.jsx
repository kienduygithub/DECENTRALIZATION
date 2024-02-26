import React from "react";
import './Register.scss';
import { connect } from "react-redux";
import {
    useHistory
} from 'react-router-dom';
const Register = () => {
    const navigate = useHistory();
    return (
        <div className="register-container d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="row px-3 px-sm-0">
                    <div className="content-left col-7 d-none d-sm-flex d-sm-flex flex-column justify-content-center">
                        <div className="brand">
                            Kiến Duy
                        </div>
                        <div className="detail">
                            Create everything
                        </div>
                    </div>
                    <div className="content-right col-12 col-sm-5 d-flex flex-column py-3 gap-2">
                        <span className="mobile-brand text-center d-sm-none d-block">Kiến Duy</span>
                        <div className="form-group">
                            <label>Email: </label>
                            <input type="text" className="form-control" placeholder="Email address" />
                        </div>
                        <div className="row d-l-flex flex-l-column gap-2">
                            <div className="form-group col-l-6">
                                <label>Phone number: </label>
                                <input type="text" className="form-control" placeholder="Phone number" />
                            </div>
                            <div className="form-group col-l-6">
                                <label>Username: </label>
                                <input type="text" className="form-control" placeholder="Username" />
                            </div>
                        </div>
                        <div className="row d-l-flex flex-l-column gap-2">
                            <div className="form-group col-l-6">
                                <label>Password: </label>
                                <input type="password" className="form-control" placeholder="Password"/>
                            </div>
                            <div className="form-group col-l-6">
                                <label>Re-enter password: </label>
                                <input type="password" className="form-control" placeholder="Re-enter password"/>
                            </div>
                        </div>
                        <button className="btn btn-primary">Login</button>
                        <hr />
                        <div className="text-center">
                            <button className="btn btn-success" onClick={() => navigate.push('/login')}>
                                Already've an account. Login
                            </button>
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
export default connect(mapStateToProps, mapDispatchToProps)(Register);