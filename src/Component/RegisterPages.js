import React, {Component} from 'react';
import "./RegisterPages.css";


export default class RegisterPages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                errors: {}
            },
            submitted: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;

        return (
            <div className="Register-pages">
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
            </div>
            </div>
        );
    }
}

