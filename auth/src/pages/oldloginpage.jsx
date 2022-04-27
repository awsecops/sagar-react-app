import React from "react";
import Page from "../Page";
import LoginForm from "../components/LoginForm";
import imageData from "../assets/images/right-img.png";
import { Tooltip, Pagination, Dropdown, Menu } from "antd";

const LoginPage = () => {
  function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }
  function handleMenuClick(e) {
    console.log("click", e);
  }

  // Action button
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key='1'>1st item</Menu.Item>
      <Menu.Item key='2'>2nd item</Menu.Item>
      <Menu.Item key='3'>3rd item</Menu.Item>
    </Menu>
  );
  return (
    // <Page title="Login">
    //  <LoginForm></LoginForm>
    // </Page>
    <div className='w-100 main-content'>
      <div className='login-wrap'>
        <section className='ftco-section'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-12 col-lg-12'>
                <div className='p-4 p-md-5'>
                  <div className='d-flex'>
                    <div className='w-100 text-center login-header'>
                      <p className='login-header-title'>Welcome back!</p>
                      <p className='login-header-subtitle'>Please sign in to continue with your tasks</p>
                      {/* <Tooltip title="prompt text">
                        <span>Tooltip will show on mouse enter.</span>
                      </Tooltip>
                      <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />

                      <Dropdown.Button overlay={menu}>Actions</Dropdown.Button> */}
                    </div>
                  </div>
                  <LoginForm></LoginForm>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className='img'>
        <section className='ftco-section'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-12 col-lg-12'>
                <img src={imageData} style={{ width: "100%", verticalAlign: "middle" }} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoginPage;
