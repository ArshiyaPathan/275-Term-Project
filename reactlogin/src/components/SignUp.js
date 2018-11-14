import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import config from '../config.js';
import axios from 'axios';
import NavBar from "./NavBar";
import login from "../custom_css/login.css";

class SignUp extends Component {

    state={
        userdata: {
            email: '',
            username: '',
            password: '',
        },
        emailValid: true,
        usernameValid: true,
        passwordValid: true,
        msg:false
    }

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps)
    {
        this.setState({msg:true})
        if(nextProps.signupStatus === true) {
            nextProps.history.push("/login");
        }
    }

    componentWillMount() {
    }

    handleSubmit(e){

        // console.log(this.state.userdata);
        if(this.validateEmail() === true)
        {
            if(this.validateUsername() === true)
            {
                if(this.validatePassword() === true)
                {
                    var data = {
                        "displayName": this.refs.displayName.value,
                        "email":this.refs.email.value,
                        "password":this.refs.password.value
                        }
                    let self = this;
                    // console.log("User Data:" + data)
                    axios.get(config.API_URL+'/users/store')
                    .then(function (response) {
                      console.log(response);
                    })
                    .catch(function (error) {
                      console.log(error);
                    });

                }
                else
                {
                    this.setState({passwordValid: false})
                }
            }
            else
            {
                //this.state.usernameValid = false;
                this.setState({usernameValid: false})
            }
        }
        else {
            this.setState({emailValid: false})
        }
    };
    validateEmail() {
        var emailId = this.refs.email.value;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailId))
        {
            return (true)
        }
        return (false)
    }
    validateUsername() {
        var username = this.refs.displayName.value;
        if (username.trim() !== '')
        {
            return (true)
        }
        return (false)
    }
    validatePassword(){
        console.log("hello password");
        var password = this.refs.password.value;
        if (password.trim() !== '' && password.trim().length >= 6 && /\d/.test(password))
        {
            return (true)
        }
        return (false)
    }

    render() {
        return (
            <div>
            <NavBar/>
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            <br/>
                            <h3>Sign Up</h3>
                            <div className="d-flex justify-content-end social_icon">
                                <span><i className="fab fa-facebook-square"></i></span>
                                <span><i className="fab fa-google-plus-square"></i></span>
                                <span><i className="fab fa-twitter-square"></i></span>
                            </div>
                        </div>
                        <div className="card-body">
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    { this.state.emailValid ? null : <div className="text-input-error-wrapper text-left errormessage">Please enter valid email address.</div>}
                                    <input type="text" ref="email" className="form-control" placeholder="Email"
                                    onFocus={(event) => {
                                        this.setState({emailValid: true, msg : false});
                                    }}/>

                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    { this.state.usernameValid ? null : <div className="text-input-error-wrapper text-left errormessage">Please enter username.</div>}
                                    <input type="text" ref="displayName" className="form-control" placeholder="Display Name"
                                    onFocus={(event) => {
                                        this.setState({usernameValid: true, msg : false});
                                    }}/>

                                </div>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    { this.state.passwordValid ? null : <div className="text-input-error-wrapper text-left errormessage">Password must contain more than 6 character with digit.</div>}
                                    <input type="password" ref="password" className="form-control" placeholder="Password"
                                    onFocus={(event) => {
                                       this.setState({passwordValid: true, msg : false});
                                    }}/>
                                </div>
                                <div className="form-group">
                                <button name="SignUp" value="SignUp" className="btn float-right login_btn"
                                           onClick={(event) => {
                                               this.handleSubmit(event)
                                           }}>Sign Up</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default withRouter(SignUp);