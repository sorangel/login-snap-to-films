import React,{Component} from "react";
import loginImg from "../Login/Play_Button.svg_.png";
import "./register.css";

export default class Register extends Component {
    render() {
        return (
            <div className="base-container-register" ref={this.props.containerRef}>
                <div className="header-register">Register</div>
                <div className="content-register">
                    <div className="image">
                        <img src={loginImg} alt=""/>
                    </div>
                    <div className="formRegister">
                        <div className="form-group-register">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username" />
                        </div>
                        <div className="form-group-register">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="email" />
                        </div>
                        <div className="form-group-register">
                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" placeholder="password" />
                        </div>
                    </div>
                </div>
                <div className="footer-register">
                    <button type="button" className="btnRegister">
                        Register
                    </button>
                </div>
            </div>
        );
    }
}