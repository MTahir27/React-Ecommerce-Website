import React from "react";
import InputField from "../InputField";
import "./style.scss";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handelSubmit = event => {
        event.preventDefault();
        this.setState({ email: "", password: "" })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }


    render() {
        return (
            <section className="sign-in">
                <h3>I already have an account</h3>
                <span>Enter Email & Password to Login Account</span>
                <form onSubmit={this.handelSubmit}>
                    <InputField type="email" name="email" value={this.state.email} onChange={this.handleChange} label="email" />
                    <InputField type="password" name="password" value={this.state.password} onChange={this.handleChange} label="password" />
                    <button>Login</button>
                </form>
            </section>
        )
    }
}
export default Login;