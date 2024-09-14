import React, { useContext } from 'react';
import Form from "../components/common/form";
import Joi from "joi-browser";
import { UserContext } from '../context/userContext';

export default class RegisterForm extends Form {
  static contextType = UserContext;

  state = {
    data: { username: "", password: "", name: "", userType: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .min(5)
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(6)
      .label("Password"),
    name: Joi.string()
      .required()
      .min(2)
      .label("Name"),
    userType: Joi.string()
      .required()
      .label("User Type")
  };

  doSubmit = () => {
    if (this.state.data.userType === "Sales Manager") {
      window.location = "/products";
    } else {
      window.location = "/customers";
    }
    this.context.setUser({ name: this.state.data.name, userType: this.state.data.userType });
    this.context.user = { name: this.state.data.name, userType: this.state.data.userType };
  
    // Store user name in local storage
    localStorage.setItem('userName', this.state.data.name);
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit} className="my-5">
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          <div className="form-group">
            <label>User Type</label>
            <select
              name="userType"
              value={this.state.data.userType}
              onChange={this.handleChange}
              className="form-control"
            >
              <option value="">Select User Type</option>
              <option value="Customer">Customer</option>
              <option value="Sales Manager">Sales Manager</option>
            </select>
          </div>
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}