/**
 * Created by Kong on 4/27/2017.
 */
import React from "react";
import "./login.css";

export default class Login extends React.Component{
    render(){
        return <div className="wrapper col-md-12">
            <div className="signinSection col-md-5 col-md-offset-1">
                <div className="banner">
                    SIGN IN
                </div>

                <div>
                <form className="form-group">


                            <div className="inputWrapper">
                                <input type="email" className="form-control"  placeholder="*EMAIL"/>
                            </div>






                        <div className="inputWrapper">


                            <input type="password" className="form-control" placeholder="*PASSWORD"/>
                        </div>



                    <div className="checkbox">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                    </div>
                    <button type="submit" className="buttons btn btn-lg btn-primary">Submit</button>
                </form>

                </div>
                <div>
                    <a href="#">Forgot Password? </a>
                </div>


            </div>
            <vr/>
            <div className="registerSection col-md-5 col-md-offset-1">
                <div className="banner">
                    REGISTER
                </div>
                <div id="ad">Enjoy benefits that include</div>
                <ul className="loginList">
                    <li className="loginList">Add cars to your wish list</li>
                    <li className="loginList">View your order history</li>
                    <li className="loginList">Stay updated with our news</li>
                </ul>
                <button type="submit" className="buttons btn btn-lg btn-primary">Create Account</button>
            </div>
        </div>
        }
};