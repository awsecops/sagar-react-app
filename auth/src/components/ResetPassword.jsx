import React from "react";
import { withRouter } from "react-router";
import  * as userService  from "../services/userService";
import * as localStorageService from "../services/localStorageService";
import { LocalStorageKeys } from "../../loginConstants";
import emailImage from '../assets/images/icons/EmailIcon.png';
import googleImage from '../assets/images/icons/GoogleIcon.png';
class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailOrUsername: "",
      showEmail: true,
    };

    //create object of user service
    this.userService = new UserService();
    
    //binding events handlers
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resendResetPasswordLink = this.resendResetPasswordLink.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    this.setState({
      [target.name]: target.value,
    });
  }

  componentWillMount() {}

  handleSubmit(event) {

    event.preventDefault();

    //service calling
    // this.userService
    //   .doLogin({
    //     userName: this.state.emailOrUsername,
    //     password: this.state.emailOrUsername,
    //   })
    //   .then((response) => {
    //     //success response then store data into local storage
    //     this.localStorageService.SetItem(
    //       LocalStorageKeys.UserName,
    //       this.state.emailOrUsername
    //     );
    //     this.localStorageService.SetItem(LocalStorageKeys.User, response.data);
    //     const { history } = this.props;
    //     //redirect to welcome page
    //     history.push("/welcome");
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });

    this.setState({ showEmail: false });
    this.props.UpdateTitleAndSubTitle("Reset link sent!","Please check your mail for the password reset link");
  }
  resendResetPasswordLink() {}
  render() {
    return (
      <form className="signin-form" onSubmit={this.handleSubmit}>
        {this.state.showEmail ? (
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email-id"
              name="emailOrUsername"
              value={this.state.emailOrUsername}
              onChange={this.handleInputChange}
              required
            />
            <div className="input-group-append">
            <span className="input-group-text"><img src={emailImage} style={{maxHeight:"18px"}}/></span>
            </div>
          </div>
        ) : (
          <div className="w-100 login-header">
            <span className="login-header-subtitle">
              Click{" "}
              <span
                className="resend-link-text"
                onClick={this.resendResetPasswordLink}
              >
                here
              </span>{" "}
              to resend it.
            </span>
          </div>
        )}

        <div className="form-group">
          {this.state.showEmail ? (
            <button
              type="submit"
              className="form-control btn btn-primary rounded submit px-3"
            >
              Reset Password
            </button>
          ) : (
            <button
              type="submit"
              className="form-control btn btn-primary rounded submit px-3"
            >
              Continue to sign in
            </button>
          )}
        </div>

        {this.state.showEmail ? (
          <>
            <div className="d-md-flex mb-3">
              <hr className="w-45" /> <div className="w-10 plr-5">OR</div>
              <hr className="w-45" />
            </div>
            <div className="form-group d-md-flex mb-3">
              <button
                type="submit"
                className="form-control btn btn-white rounded submit px-3"
              >
                            <img src={googleImage} className="icon google-icon" /> Continue with Google
              </button>
            </div>
          </>
        ) : null}
      </form>
    );
  }
}

export default withRouter(ResetPassword);
