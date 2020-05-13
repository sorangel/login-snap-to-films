import React, {Component} from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from "./Component/Login/login";
import Register from "./Component/Login/register";
import RegisterPages from "./Component/RegisterPages";

import "./App.css";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginActive: true
        };

        this.rightSide = null;
    }

    componentDidMount() {

    }

    changeState() {
        const {isLoginActive} = this.state;

        if (isLoginActive) {
            this.rightSide.classList.remove("right");
            this.rightSide.classList.add("left");
        } else {
            this.rightSide.classList.remove("left");
            this.rightSide.classList.add("right");
        }
        this.setState(prevState => ({isLoginActive: !prevState.isLoginActive}));
    }

    render() {
        const {isLoginActive} = this.state;
        const current = isLoginActive ? "Register" : "Login";
        const currentActive = isLoginActive ? "login" : "register";

        let registerContent = null;

        if (isLoginActive) {
            registerContent = <Login containerRef={ref => (this.current = ref)}/>;
        } else {
            registerContent = (
                <Register
                    current={current}
                    currentActive={currentActive}
                    containerRef={ref => (this.rightSide = ref)}
                    onClick={this.changeState.bind(this)}/>);
        }

        //Add .right by default
        if (isLoginActive && !!this.rightSide) this.rightSide.classList.add("right");

        const actions = this.changeState.bind(this);
        const containerRef = ref => (this.rightSide = ref);
        return (
            <div className="App">

                <Router>

                        <div className="container-fluid">
                            <Route exact path="/register" component={ Register } />
                            <Route exact path="/login" component={ Login } />
                        </div>
                </Router>


                <div className="login">
                    <div className="container" ref={ref => (this.container = ref)}>
                        {registerContent}
                    </div>
                    <RightSide
                        current={current}
                        currentActive={currentActive}
                        containerRef={containerRef}
                        onClick={actions}
                    />
                </div>
            </div>

        );
    }
}

const RightSide = (props) => {
    return (
        <div
            className="right-side-button"
            ref={props.containerRef}
            onClick={props.onClick}
        >
            <div className="inner-container">
                <div className="text">{props.current}</div>

            </div>
        </div>
    );
};

