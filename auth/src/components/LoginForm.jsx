import React, { useEffect, useState } from "react";
import { useHistory, withRouter } from "react-router";
import Axios from "lib-app/Axios";
import { configuration } from "../../config";
import * as userService from "../services/userService";
import * as localStorageService from "../services/localStorageService";
import { LocalStorageKeys } from "../../loginConstants";
import googleImage from "../assets/images/icons/GoogleIcon.png";
import userImage from "../assets/images/icons/UserIcon.png";
import passwordImage from "../assets/images/icons/passwordIcon.png";
import rightArrowImage from "../assets/images/icons/RightArrowIcon.png";
function LoginForm() {
  const [state, setState] = useState({ emailOrUsername: "", password: "" });
  const history = useHistory();

  //create object of user service

  //binding events handlers

  function handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    setState({
      [target.name]: target.value
    });
  }

  useEffect(() => {
    const userName = localStorageService.GetItem(LocalStorageKeys.UserName);

    if (userName) {
      history.push("/welcome");
    }
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    debugger;
    //service calling
    userService
      .doLogin({
        userName: state.emailOrUsername,
        password: state.password
      })
      .then(response => {
        debugger;
        //success response then store data into local storage
        localStorageService.SetItem(LocalStorageKeys.UserName, state.emailOrUsername);
        localStorageService.SetItem(LocalStorageKeys.User, response.data);

        //redirect to welcome page
        history.push("/dashboard");
      })
      .catch(error => {
        localStorageService.SetItem(LocalStorageKeys.User, { username: "abv" });
        history.push("/dashboard");
      });
  };

  const redirectToResetPassword = () => {
    history.push("/resetpassword");
  };

  return (
    <form className='signin-form' onSubmit={handleSubmit}>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Username'
          name='emailOrUsername'
          value={state.emailOrUsername}
          onChange={handleInputChange}
          required
        />
        <div className='input-group-append'>
          <span className='input-group-text'>
            <img src={userImage} style={{ maxHeight: "18px" }} />
          </span>
        </div>
      </div>

      <div className='input-group mb-3'>
        <input
          className='form-control'
          placeholder='Password'
          name='password'
          type='password'
          value={state.password}
          onChange={handleInputChange}
          required
        />
        <div className='input-group-append'>
          <span className='input-group-text'>
            <img src={passwordImage} />
          </span>
        </div>
      </div>
      <div className='form-group'>
        <button type='submit' className='form-control btn btn-primary rounded submit px-3'>
          Sign In <img src={rightArrowImage} />
        </button>
      </div>
      <div className='form-group d-md-flex'>
        <div className='w-100 text-right'>
          <a className='btnForgotLink' onClick={redirectToResetPassword}>
            Forgot Password
          </a>
        </div>
      </div>

      <div className='form-group'>
        <button type='submit' className='form-control btn btn-primary rounded submit px-3'>
          Sign In <img src={rightArrowImage} />
        </button>
      </div>

      <div className='d-md-flex mb-3'>
        <hr className='w-45' /> <div className='w-10 plr-5'>OR</div>
        <hr className='w-45' />
      </div>
      <div className='form-group d-md-flex mb-3'>
        <button type='submit' className='form-control btn btn-white rounded submit px-3'>
          <img src={googleImage} className='icon google-icon' /> Continue with Google
        </button>
      </div>
    </form>
  );
}

export default withRouter(LoginForm);
