import React from "react";
import { Table, Tag, Space, Row, Col, Layout,Collapse } from "antd";
import workflowHeaderImage from "./assets/images/workmanager_header.png";
const { Panel } = Collapse;

export function WorkManager(props) {

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  return (
    <Layout>
      <Row gutter={16}>
        <Col span={24}>
          <img src={workflowHeaderImage} width="100%" />
        </Col>
      </Row>
      <Row gutter={4}>
        <Col md={4} xs={24}>
            <Space align="start">
                <span>Filters</span>
            </Space>
            <Space align="end">
                <span>Clear All </span>
            </Space>
        </Col>
        <Col md={20} xs={24}>
            <span> showing result 8 of 100</span>
        </Col>
      </Row>

      <Row gutter={4}>
        <Col md={4} xs={24}>
        <Collapse defaultActiveKey={['1']} onChange={callback}>
    <Panel header="POD Collection Status" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="Priority" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="POD Requirement Status" key="3">
      <p>{text}</p>
    </Panel>
    <Panel header="Shipper Name" key="4">
      <p>{text}</p>
    </Panel>
    <Panel header="Action Date" key="5">
      <p>{text}</p>
    </Panel>
  </Collapse>
        </Col>
        <Col md={20} xs={24}>
          <Table columns={columns} dataSource={data} />
        </Col>
      </Row>
    </Layout>
  );
}
