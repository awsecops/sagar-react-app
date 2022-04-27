
import React, { Component, useState } from 'react';
import { Menu, Input, Row, Col, Dropdown, Image, Button, Drawer } from 'antd';
import { SearchOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

var profilePlaceholder = "https://portal.trukker.com/new/images/trukker-kk.png"

const Headernav=()=>
{
  const [selectedMenu, setSelectedMenu] = useState('dashboard');
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  function onSearch(event) {
    console.log(event.target.value);
  }
  
  function logout(e){
    console.log(e)
  }

  return (
    <div>
      <Row wrap={false} className="mobile-only">
        <Col flex="none">
          <Button onClick={showDrawer} >
            <MenuOutlined className='burger-menu' />
          </Button>
        </Col>
        <Col flex="auto">
          <Input placeholder="Search" className='menu-control' onChange={onSearch} suffix={<SearchOutlined />} style={{ width: '100%' }} />
        </Col>
      </Row>
     
      <Drawer title={
          <Row wrap={false}>
            <Col flex="none">
              <Image width={30}
                src="error"
                fallback="data:image/png;base64,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"
              />  
              <small>
                Savan Savani
              </small>
            </Col>
            <Col flex="auto">
              <a target="_blank" style={{float: 'right'}}><small> Logout</small></a>
            </Col>
        </Row>
      } placement="right" onClose={onClose} visible={visible}>
       <Row>
        <Col xs={24} sm={24} className="nav-wrapper" >
          <Menu selectedKeys={[selectedMenu]} onClick={(e) => setSelectedMenu(e.key)} mode="vertical">
            <Menu.Item key="dashboard" >
              <Link to="dashboard">Home</Link> 
            </Menu.Item>
            <Menu.Item key="workmanager">
            <Link to="work-manager">Work Manager</Link> 
            </Menu.Item>
            <Menu.Item key="poddeliveries">
            <Link to="pod-deliveries">POD Deliveries</Link> 
            </Menu.Item>
            <Menu.Item key="audit">
            <Link to="audit-trail">Audit Trail</Link> 
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
      </Drawer>
      <Row className='header desktop-only'>
        <Col xs={24} sm={24} md={12} className="nav-wrapper" >
          <Menu selectedKeys={[selectedMenu]} onClick={(e) => setSelectedMenu(e.key)} mode="horizontal">
          <Menu.Item key="dashboard" >
              <Link to="dashboard">Home</Link> 
            </Menu.Item>
            <Menu.Item key="workmanager">
            <Link to="work-manager">Work Manager</Link> 
            </Menu.Item>
            <Menu.Item key="poddeliveries">
            <Link to="pod-deliveries">POD Deliveries</Link> 
            </Menu.Item>
            <Menu.Item key="audit">
            <Link to="audit-trail">Audit Trail</Link> 
            </Menu.Item>
          
          </Menu>
        </Col>
        <Col xs={24} sm={24} md={12} style={{padding: "20px"}} className="text-right" >
          <Input placeholder="Search" className='menu-control' onChange={onSearch} size="large" suffix={<SearchOutlined />} style={{ width: 300 }} />
          <Dropdown arrow className='nav-profile' overlay={<Menu
                items={[
                  {
                    label: (<a target="_blank">Logout</a>)
                  },
                ]}
              />}>
                <Button>
                  <Image width={30}
                    src="error"
                    fallback="data:image/png;base64,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"
                  />  
                  <small>
                    Savan Savani
                  </small>
                </Button>
          </Dropdown>
          
          
        </Col>
      </Row>

    </div>
    );
}

export default Headernav;