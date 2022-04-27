import React from "react";
import { withRouter } from "react-router";
import  * as userService from "../services/userService";
import * as localStorageService from "../services/localStorageService";
import { LocalStorageKeys } from "../../loginConstants";
import passwordImage from '../assets/images/icons/passwordIcon.png';
class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      confirmPassword: "",
    };

    //create object of user service
    this.userService = new UserService();
    this.localStorageService = new LocalStorageService();
    //binding events handlers
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }

  
  handleSubmit(event) {
    event.preventDefault();

    //service calling
    this.userService
      .doLogin({
        password: this.state.password,
        
      })
      .then((response) => {
        //success response then store data into local storage
        
        this.localStorageService.SetItem(LocalStorageKeys.User, response.data);
        const { history } = this.props;
        //redirect to welcome page
        history.push("/welcome");
      })
      .catch((error) => {
        alert(error);
      });
  }

  render() {
    return (
        <>
        <ul id="ulPasswordCondition">
            <li>have at least 8 characters</li>
            <li>have at least one lower case</li>
            <li>have at least one uper case</li>
            <li>have at least one number</li>
            <li>have at least one special character (!,%,@,#, etc.)</li>

        </ul>
      <form className="signin-form" onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="new password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />
          <div className="input-group-append">
          <span className="input-group-text"><img src={passwordImage}/></span>
          </div>
        </div>
        <div className="input-group mb-3">
          <input
            className="form-control"
            placeholder="confirm new password"
            name="password"
            type="password"
            value={this.state.confirmPassword}
            onChange={this.handleInputChange}
            required
          />
          <div className="input-group-append">
          <span className="input-group-text"><img src={passwordImage}/></span>
          </div>
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="form-control btn btn-primary rounded submit px-3"
          >
            Continue to sign in
          </button>
        </div>
        
      </form>
      </>
    );
  }
}

export default withRouter(ChangePassword);
