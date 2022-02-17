import React from "react";
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
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    <button>Login</button>
                </form>
            </section>
        )
    }
}
export default Login;