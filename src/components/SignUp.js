import React from "react";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gender: "male",
      phoneNumber: "",
      password: "",
      errorMessage: "",
      userName: ""
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    const alphaNumeric = /^[0-9a-zA-Z]+$/;
    const numbers = /^\d+$/;
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.phoneNumber === "" ||
      this.state.gender === "" ||
      this.state.password === ""
    ) {
      this.setState({ errorMessage: "All fields are mandatory", userName: "" });
      return;
    }
    if (!this.state.name.match(alphaNumeric)) {
      this.setState({ errorMessage: "Name is not alphanumeric", userName: "" });
      return;
    }
    if (this.state.email.indexOf("@") < 1) {
      this.setState({ errorMessage: "Email must contain @", userName: "" });
      return;
    }

    if (!this.state.gender) {
      this.setState({
        errorMessage: "Please identify as male, female or others",
        userName: ""
      });
      return;
    }
    if (!numbers.test(this.state.phoneNumber)) {
      this.setState({
        errorMessage: "Phone Number must contain only numbers",
        userName: ""
      });
      return;
    }
    if (this.state.password.length < 6) {
      this.setState({
        errorMessage: "Password must contain atleast 6 letters",
        userName: ""
      });
      return;
    }
    const user = this.state.email.substring(0, this.state.email.indexOf("@"));
    this.setState({
      userName: user,
      errorMessage: "",
      name: "",
      email: "",
      gender: "male",
      phoneNumber: "",
      password: ""
    });
  };
  render() {
    return (
      <div className="container">
        Name:
        <input
          data-testid="name"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <br />
        <br />
        Email:
        <input
          data-testid="email"
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <br />
        <br />
        Gender:
        <input
          data-testid="gender"
          type="text"
          name="gender"
          value={this.state.gender}
          onChange={this.handleChange}
        />
        <br />
        <br />
        PhoneNumber:
        <input
          data-testid="phoneNumber"
          type="text"
          name="phoneNumber"
          value={this.state.phNo}
          onChange={this.handleChange}
        />
        <br />
        <br />
        Password:
        <input
          data-testid="password"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <button data-testid="submit" onClick={this.handleSubmit}>
          Submit
        </button>
        {this.state.errorMessage && <h3>{this.state.errorMessage}</h3>}
        {this.state.userName && <h1>Hello {this.state.userName}</h1>}
      </div>
    );
  }
}
