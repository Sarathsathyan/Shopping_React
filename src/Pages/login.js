import React, {Component} from 'react';
import { BrowserRouter as Router,browserRouter, Route, Link } from 'react-router-dom';
const Login =() =>{

        return(
            <div>

                <section className="login_part section_padding " style={{padding:'40px'}}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="login_part_text text-center">
                                    <div className="login_part_text_iner">
                                        <h2>New to our Shop?</h2>
                                        <p>There are advances being made in science and technology
                                            everyday, and a good example of this is the</p>
                                        <Link to={'/register'} className="btn_3">Create an account</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="login_part_form">
                                    <div className="login_part_form_iner">
                                        <h3>Welcome Back ! <br></br>
                                            Please Sign in now</h3>
                                        <form className="row contact_form" action="#" method="post"
                                              noValidate="novalidate">
                                            <div className="col-md-12 form-group p_star">
                                                <input type="text" className="form-control" id="name" name="name"
                                                       value=""
                                                       placeholder="Username"></input>
                                            </div>
                                            <div className="col-md-12 form-group p_star">
                                                <input type="password" className="form-control" id="password"
                                                       name="password" value=""
                                                       placeholder="Password"></input>
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <div className="creat_account d-flex align-items-center">
                                                    <label htmlFor="f-option">Remember me</label>
                                                    <input type="checkbox" id="f-option" name="selector">
                                                        </input>
                                                </div>
                                                <button type="submit" value="submit" className="btn_3">
                                                    log in
                                                </button>
                                                <a className="lost_pass" href="#">forget password?</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>



        );


}

export default Login;