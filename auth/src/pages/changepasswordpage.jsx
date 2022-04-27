import React from "react";
import Page from "../Page";
import ChangePassword from "../components/ChangePassword";
import imageData from "../assets/images/right-img.png";
const ChangePasswordPage = () => {
    const [state, setState] = React.useState({ header: "Create new password", subheader: "Password must have" });
    
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
                    <ChangePassword></ChangePassword>
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

export default ChangePasswordPage;
