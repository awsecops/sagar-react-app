import React, { useState } from "react";
import { Row, Col, Table, Space, Tag, Menu, Empty } from "antd";
import lightbanner from "./assets/images/lightbanner.png";
const columns = [
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tag) => {
      let color = "red";
      if (tag[0] === "Low") {
        color = "green";
      } else if (tag[0] === "Medium") {
        color = "orange";
      }
      return (
        <Tag color={color} key={tag}>
          {tag[0].toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: "Order Id",
    dataIndex: "orderId",
    key: "orderId",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Truck Reg No",
    dataIndex: "truckRegNo",
    key: "truckRegNo",
  },
  {
    title: "Shipper",
    dataIndex: "shipper",
    key: "shipper",
  },
  {
    title: "Move Type",
    dataIndex: "moveType",
    key: "moveType",
  },
  {
    title: "POD Req. Status",
    dataIndex: "podReqStatus",
    key: "podReqStatus",
  },
  {
    title: "POD Collection Status",
    dataIndex: "podCollectionStatus",
    key: "podCollectionStatus",
  },
  {
    title: "Action Date",
    dataIndex: "actionDate",
    key: "actionDate",
  },
];

const data = [
  {
    key: "1",
    orderId: "11",
    truckRegNo: "t32",
    shipper: "Unilever",
    moveType: "DOM",
    podReqStatus: "Soft",
    podCollectionStatus: "POD is with vendor",
    actionDate: "05/04/2022",
    tags: ["High"],
  },
  {
    key: "2",
    orderId: "22",
    truckRegNo: "t42",
    shipper: "Unilever",
    moveType: "DOM",
    podReqStatus: "Soft",
    podCollectionStatus: "POD is with vendor",
    actionDate: "05/04/2022",
    tags: ["Medium"],
  },
  {
    key: "3",
    orderId: "33",
    truckRegNo: "t32",
    shipper: "Unilever",
    moveType: "DOM",
    podReqStatus: "Soft",
    podCollectionStatus: "POD is with vendor",
    actionDate: "05/04/2022",
    tags: ["Low"],
  },
];

function WorkManager() {
  const { SubMenu } = Menu;
  const [tags, setTags] = useState([]);
  const [openKeys, setOpenKeys] = React.useState(["sub1"]);

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
    <div className="work-manager-container">
      
      <Row style={{ marginleft: "0px 10px" }}>
        <Col sm={24} md={24}>
          <Empty description="" image={lightbanner}/>
        </Col>
      </Row>
      
      <Row style={{ margin: "0 10px",padding:"0 10px" }}>
      <Col xs={24} md={4}>
        
      <Space align="start">
      <b>Filters</b>
      </Space>
      <Space align="end">
      <a
          style={{
            marginLeft: "100px",
            color: "#FF5D00",
            textDecoration: "underline",
          }}
          onClick={() => setTags([])}
        >
          Clear All
        </a>
      </Space>
      
      </Col>
      <Col xs={24} md={20}>
      <p>Showing 8 results of 100</p>
      </Col>
        

      </Row>
        
      
      <Row style={{ margin: "10px" }} gutter={10}>
        <Col xs={24} md={4} gutter={5} className="menu-parent" >
          <div style={{ paddingBottom: "3px" }}>
            {tags.map((e, index) => (
              <Tag closable key={index}>
                {e}
              </Tag>
            ))}
          </div>
          <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            <Menu 
              mode="inline"
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              onClick={onHandleClick}
              
            >
              <SubMenu key="sub1" title="POD Collection Status">
                <Menu.Item key="Option 1">Option 1</Menu.Item>
                <Menu.Item key="Option 2">Option 2</Menu.Item>
                <Menu.Item key="Option 3">Option 3</Menu.Item>
                <Menu.Item key="Option 4">Option 4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title="Priority">
                <Menu.Item key="Option 5">Option 5</Menu.Item>
                <Menu.Item key="Option 6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="Option 7">Option 7</Menu.Item>
                  <Menu.Item key="Option 8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu key="sub4" title="POD Requirement Status">
                <Menu.Item key="Option 9">Option 9</Menu.Item>
                <Menu.Item key="Option 10">Option 10</Menu.Item>
                <Menu.Item key="Option 11">Option 11</Menu.Item>
                <Menu.Item key="Option 12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          </Space>
        </Col>
        <Col xs={24} md={20}>
          <Table columns={columns} dataSource={data} />
        </Col>
      </Row>
    </div>
  );
}

export default WorkManager;
