import React, { useState } from "react";
import { Row, Col, Table, Space, Tag, Menu, Empty, Typography, Image, Divider, Tabs } from "antd";
import { CloudUploadOutlined, DeleteOutlined } from "@ant-design/icons";
import "./pod-delivery.scss";
import "antd/dist/antd.css";

import lightbanner from "../../assets/images/lightbanner.png";
import rectangle from "../../assets/images/rectangle_blank.png";

function PODDelivery() {
  const [tags, setTags] = useState([]);
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const { TabPane } = Tabs;
  const { SubMenu } = Menu;
  const { Text } = Typography;

  function callback(key) {
    console.log(key);
  }

  // submenu keys of first level
  const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const onHandleClick = (e) => {
    setTags([...tags, e.key]);
  };

  return (
    <div className='main'>
      <div className='upper-banner'>
        <Empty image={lightbanner} imageStyle={{ height: 136 }} description={""} />
      </div>
      <Divider />
      <>
        {/* <div
          style={{
            color: "black",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            // flexDirection: "row"
          }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <b>Filters</b>
            <a
              style={{
                marginLeft: "8em",
                color: "#FF5D00",
                textDecoration: "underline",
              }}
              onClick={() => setTags([])}>
              Clear All
            </a>

            <div style={{ marginLeft: "1em", marginTop: "5px" }}>
              <Tabs defaultActiveKey='1' onChange={callback}>
                <TabPane tab='Hard Copy Confirmation' key='1'></TabPane>
                <TabPane tab='Recieve Couriers' key='2'></TabPane>
                <TabPane tab='Send Couriers' key='3'></TabPane>
                <TabPane tab='Map Waybill' key='4'></TabPane>
              </Tabs>
            </div>
          </div>
        </div> */}

        <Row className='main-row' gutter={[16, 0]}>
          <Col md={4} lg={4}>
            <div className='filter-holder'>
              <b>Filters</b>
              <a onClick={() => setTags([])}>Clear All</a>
            </div>

            <Space direction='vertical' size='middle' style={{ minHeight: "55vh", border: "0.001px solid lightgrey" }}>
              <Menu mode='inline' openKeys={openKeys} onOpenChange={onOpenChange} onClick={onHandleClick} style={{ width: 256 }}>
                <SubMenu key='sub1' title='POD Station'>
                  <Menu.Item key='Station 1'>Station 1</Menu.Item>
                  <Menu.Item key='Station 2'>Station 2</Menu.Item>
                  <Menu.Item key='Station 3'>Station 3</Menu.Item>
                  <Menu.Item key='Station 4'>Station 4</Menu.Item>
                </SubMenu>
                <SubMenu key='sub2' title='Move Type'>
                  <Menu.Item key='Move 5'>Move 5</Menu.Item>
                  <Menu.Item key='Move 6'>Move 6</Menu.Item>
                </SubMenu>
                <SubMenu key='sub4' title='Action Date'>
                  <Menu.Item key='Option 9'>Option 9</Menu.Item>
                  <Menu.Item key='Option 10'>Option 10</Menu.Item>
                  <Menu.Item key='Option 11'>Option 11</Menu.Item>
                  <Menu.Item key='Option 12'>Option 12</Menu.Item>
                </SubMenu>
              </Menu>
            </Space>
          </Col>

          <Col lg={20} md={20}>
            <div className='tabs-holder'>
              <Tabs defaultActiveKey='1' onChange={callback}>
                <TabPane tab='Hard Copy Confirmation' key='1'></TabPane>
                <TabPane tab='Recieve Couriers' key='2'></TabPane>
                <TabPane tab='Send Couriers' key='3'></TabPane>
                <TabPane tab='Map Waybill' key='4'></TabPane>
              </Tabs>
            </div>

            <Row>
              <HardCopyConfirmationContent />
            </Row>
          </Col>
        </Row>
      </>
    </div>
  );
}

export default PODDelivery;

function HardCopyConfirmationContent() {
  const { Text } = Typography;

  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderid",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Truck Reg. No.",
      dataIndex: "truckregno",
    },
    {
      title: "Move Type",
      dataIndex: "movetype",
    },
    {
      title: "POD Collection Status",
      dataIndex: "podcollectionstatus",
    },
    {
      title: "Action Date",
      dataIndex: "actiondate",
    },
    {
      title: "POD Station",
      dataIndex: "podstation",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
  ];

  const data = [
    {
      key: "1",
      orderid: "P2223054296",
      truckregno: "DU-7898-25",
      movetype: "DOM",
      podcollectionstatus: "Delivery at station 2",
      actiondate: "02/02/2022",
      podstation: "Station 1",
      age: 12,
    },
    {
      key: "2",
      orderid: "P2223054296",
      truckregno: "DU-7898-25",
      movetype: "DOM",
      podcollectionstatus: "Delivery at station 2",
      actiondate: "02/02/2022",
      podstation: "Station 3",
      age: 12,
    },
    {
      key: "3",
      orderid: "P2223054296",
      truckregno: "DU-7898-25",
      movetype: "DOM",
      podcollectionstatus: "Delivery at station 2",
      actiondate: "02/02/2022",
      podstation: "Station 4",
      age: 12,
    },
    {
      key: "5",
      orderid: "P2223054296",
      truckregno: "DU-7898-25",
      movetype: "DOM",
      podcollectionstatus: "Delivery at station 2",
      actiondate: "02/02/2022",
      podstation: "Station 2",
      age: 12,
    },
    {
      key: "6",
      orderid: "P2223054296",
      truckregno: "DU-7898-25",
      movetype: "DOM",
      podcollectionstatus: "Delivery at station 2",
      actiondate: "02/02/2022",
      podstation: "Station 2",
      age: 12,
    },
    {
      key: "7",
      orderid: "P2223054296",
      truckregno: "DU-7898-25",
      movetype: "DOM",
      podcollectionstatus: "Delivery at station 2",
      actiondate: "02/02/2022",
      podstation: "Station 2",
      age: 12,
    },
    {
      key: "8",
      orderid: "P2223054296",
      truckregno: "DU-7898-25",
      movetype: "DOM",
      podcollectionstatus: "Delivery at station 2",
      actiondate: "02/02/2022",
      podstation: "Station 2",
      age: 12,
    },
  ]; // rowSelection object indicates the need for row selection

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, "selectedRows: ", selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <>
      <Col lg={18} md={18}>
        <Table
          className='table'
          rowSelection={{
            type: "radio",
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
          pagination={false}
        />
      </Col>

      <Col lg={6} md={6}>
        <div className='documents-holder'>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <b style={{ color: "#1A234B" }}>Documents (3)</b>
            <div>
              <CloudUploadOutlined style={{ fontSize: "26px" }} />
              <span
                style={{
                  color: "#FF5D00",
                  textDecoration: "underline",
                  fontSize: "13px",
                  cursor: "pointer",
                  lineHeight: "16px",
                  marginLeft: "10px",
                }}>
                View Details
              </span>
            </div>
          </div>

          <div style={{ marginTop: "25px" }}>
            <div style={{ width: "80%", display: "flex", justifyContent: "space-between" }}>
              <Text>Consignee Stamp</Text>
              <Text>Yes</Text>
            </div>
            <div style={{ width: "80%", display: "flex", justifyContent: "space-between" }}>
              <Text>Consignee Signature</Text>
              <Text>No</Text>
            </div>
          </div>

          <div className='image-holder'>
            <div className='img-block'>
              <Image src={rectangle} height={216} />
              <DeleteOutlined onClick={() => alert("delete this pic")} style={{ fontSize: "22px" }} />
            </div>
            <div className='img-block'>
              <Image src={rectangle} height={216} />
              <DeleteOutlined style={{ fontSize: "22px" }} />
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}
