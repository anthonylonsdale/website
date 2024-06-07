import React from 'react';
import { Layout, Menu, Button, Card, Row, Col } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import eigelSign18x24 from './images/Eigel for Governor Yard Sign 18x24-1.png';
import eigelSign48x72 from './images/Eigel for Governor Yard Sign 48x72-1.png';
import eigelSign48x96 from './images/Eigel for Governor Yard Sign 48x96-1.png';
import palmCardPDF from './images/Eigel Palm Card March 29 2024 Update.pdf';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header className="layout-header">
      <Menu mode="horizontal" className="custom-menu">
          <Menu.Item key="1" className="custom-menu-item">
            Home
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content" style={{ marginTop: '50px' }}>
          <h1>Information Page</h1>
          <p>Welcome to the information page. Here you can find images and download links for PDFs.</p>

          <div>
            <h2>Images</h2>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={8}>
                <Card
                  hoverable
                  cover={<img alt="Eigel Yard Sign 18x24" src={eigelSign18x24} />}
                >
                  <Card.Meta title="Eigel Yard Sign 18x24" />
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card
                  hoverable
                  cover={<img alt="Eigel Yard Sign 48x72" src={eigelSign48x72} />}
                >
                  <Card.Meta title="Eigel Yard Sign 48x72" />
                </Card>
              </Col>
              <Col xs={24} sm={12} md={8}>
                <Card
                  hoverable
                  cover={<img alt="Eigel Yard Sign 48x96" src={eigelSign48x96} />}
                >
                  <Card.Meta title="Eigel Yard Sign 48x96" />
                </Card>
              </Col>
            </Row>
          </div>

          <div style={{ marginTop: '30px' }}>
            <h2>PDF Downloads</h2>
            <Button type="primary" href={palmCardPDF} download>
              Download Eigel Palm Card
            </Button>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default App;
