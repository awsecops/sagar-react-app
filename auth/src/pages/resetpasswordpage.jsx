import React from "react";
import Page from "../Page";
import ResetPassword from "../components/ResetPassword";
import imageData from "../assets/images/right-img.png";
const ResetPasswordPage = () => {
    const [state, setState] = React.useState({ header: "Reset Password", subheader: "Reset link will be sent to your email address" });
    const UpdateTitleAndSubTitle=(title,subTitle)=>{
        setState({header:title,subheader:subTitle});
    }
  return (
    // <Page title="Login">
    //  <LoginForm></LoginForm>
    // </Page>
    <div className="w-100 main-content">
      <div className="login-wrap">
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-12">
                
                  <div className="p-4 p-md-5">
                    <div className="d-flex">
                      <div className="w-100 login-header">
                        <p className="login-header-title">{state.header}</p>
                        <p className="login-header-subtitle">
                         {state.subheader}
                        </p>
                      </div>
                    </div>
                    <ResetPassword UpdateTitleAndSubTitle={UpdateTitleAndSubTitle}></ResetPassword>
                  </div>
                
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="img">
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 col-lg-12">
                
                  <img
                    src={imageData}
                    style={{ width: "100%", verticalAlign: "middle" }}
                  />
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
