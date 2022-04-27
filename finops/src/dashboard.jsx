import React from "react";
import { Layout, Row, Col, DatePicker, Card, Radio,Space } from "antd";
import { QuickEmbeded } from "./quickEmbaded";
import chartimg from "./assets/images/charts.png";
const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;
const Dashboard = () => {
  const [state, setState] = React.useState({
    header: "Create new password",
    subheader: "Password must have",
  });
  function onChange(date, dateString) {
    console.log(date, dateString);
    console.log(process.env.PUBLIC_URL);
    setState({ selectedDate: dateString });
  }

  return (
    <Layout className="dashboard-container" style={{ margin: "20px" }}>
      <Content>
        <Row gutter={20}>
          <Col xs={12} md={4}>
            <Card className="light-blue-card">
              <Meta title="150" description="POD in progress" />
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="light-red-card">
              <Meta title="150/120" description="POD Collection today" />
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="light-yellow-card">
              <Meta
                title="4d 3h"
                description="Average schedule time"
                text="14%"
              />
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="light-skyblue-card">
              <Meta title="3d 2h" description="Avg. collection time " />
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="light-green-card">
              <Meta title="80" description="No of escalations" />
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="light-pink-card">
              <Meta title="2d 1h" description="Avg. resolution time" />
            </Card>
          </Col>
        </Row>
        <Row gutter={20} className="chart-parent">
          <Col md={12} xs={24}>
            <Card
              title="Team Performance"
              className="team-performance"
              extra={
                <Radio.Group value="top" style={{ marginBottom: 8 }}>
                  <Radio.Button value="top">$</Radio.Button>
                  <Radio.Button value="left">#</Radio.Button>
                </Radio.Group>
              }
            >
              <img src={chartimg} className="chartimg"/>
            </Card>
          </Col>
          <Col md={12} xs={24}>
            <Card
              title="Escalations"
              extra={
                <Radio.Group value="today" style={{ marginBottom: 8 }}>
                  <Radio.Button value="today">Today</Radio.Button>
                  <Radio.Button value="weekly">Weekly</Radio.Button>
                  <Radio.Button value="monthly">Monthly</Radio.Button>
                </Radio.Group>
              }
            >
              <img src={chartimg} className="chartimg"/>

              {/* <h2>Chart loaded here</h2> */}
            </Card>
          </Col>
          <Col md={12} xs={24}>
            <Card
              title="POD"
              extra={
                <Radio.Group value="tobeshipped" style={{ marginBottom: 8 }}>
                  <Radio.Button value="tobeshipped">
                    To Be Shipped <span className="light-blue-card">220</span>
                  </Radio.Button>
                  <Radio.Button value="tobereceived">
                    To Be Received{" "}
                    <span className="light-skyblue-card">40</span>
                  </Radio.Button>
                </Radio.Group>
              }
            >
              <img src={chartimg} className="chartimg"/>
            </Card>
          </Col>
          <Col md={12} xs={24}>
            <Card title="Agining" extra={
              <Radio.Group value="inprogress"> 
              <Radio.Button value="inprogress">In Progress <span className="light-skyblue-card">110</span> </Radio.Button>
              <Radio.Button value="escalations">Escalations <span className="light-skyblue-card">70</span></Radio.Button>
              <Radio.Button value="tobereceived">To Be Received{" "}
                      <span className="light-skyblue-card">40</span></Radio.Button>
              <Radio.Button value="pendingconfirmations">Pending Confirmations <span className="light-skyblue-card">40</span></Radio.Button>
            </Radio.Group>
            }>
           
        <img src={chartimg} className="chartimg"/>
            </Card>
          </Col>
        </Row>
      </Content>
      
    </Layout>
  );
};

export default Dashboard;
