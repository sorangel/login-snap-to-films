import React,{Component} from "react";
import loginImg from "../Login/Play_Button.svg_.png";
import "./Login.css";

export default class Login extends Component {

    render() {
        return (

            <div className="base-container-login" ref={this.props.containerRef}>
                <div className="headerLogin">Login</div>
                <div className="contentLogin">
                    <div className="image">
                        <img src={loginImg} alt=""/>
                    </div>
                    <div className="formLogin">
                        <div className="form-group-login">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username" />
                        </div>
                        <div className="form-group-login">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" />
                        </div>
                    </div>
                </div>
                <div className="footerLogin">
                    <button type="button" className="btnLogin">
                        Login
                    </button>
                </div>
            </div>
        );
    }
}