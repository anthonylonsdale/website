import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import eigelSign18x24 from './images/Eigel for Governor Yard Sign 18x24-1.png';
import eigelSign48x72 from './images/Eigel for Governor Yard Sign 48x72-1.png';
import eigelSign48x96 from './images/Eigel for Governor Yard Sign 48x96-1.png';
import palmCardPDF from './images/Eigel_4x9_PalmCard_APRIL2024_lowres.pdf';
import propTaxBillboard from './images/eigel prop tax billboard b.pdf';
import deportBillboard from './images/eigel deport billboard b.pdf';

const { Title } = Typography;

const Home = () => {
  return (
    <div>
      <Title>Home Page</Title>
      <p>Welcome to the information page. Here you can find images and download links for PDFs.</p>

      <div>
        <h2>Images</h2>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <a href={eigelSign18x24} download="Eigel_Yard_Sign_18x24.png">
              <Card hoverable cover={<img alt="Eigel Yard Sign 18x24" src={eigelSign18x24} />}>
                <Card.Meta title="Eigel Yard Sign 18x24" />
              </Card>
            </a>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <a href={eigelSign48x72} download="Eigel_Yard_Sign_48x72.png">
              <Card hoverable cover={<img alt="Eigel Yard Sign 48x72" src={eigelSign48x72} />}>
                <Card.Meta title="Eigel Yard Sign 48x72" />
              </Card>
            </a>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <a href={eigelSign48x96} download="Eigel_Yard_Sign_48x96.png">
              <Card hoverable cover={<img alt="Eigel Yard Sign 48x96" src={eigelSign48x96} />}>
                <Card.Meta title="Eigel Yard Sign 48x96" />
              </Card>
            </a>
          </Col>
        </Row>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>PDF Downloads</h2>
        <a href={palmCardPDF} download="Eigel_Palm_Card.pdf">
          <Card hoverable>
            <Card.Meta title="Download Eigel Palm Card" description="Click to download the PDF." />
          </Card>
        </a>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>Billboard Designs</h2>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <a href={propTaxBillboard} download="Eigel_Prop_Tax_Billboard.pdf">
              <Card hoverable>
                <Card.Meta title="Eigel Prop Tax Billboard" description="Click to download the PDF." />
              </Card>
            </a>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <a href={deportBillboard} download="Eigel_Deport_Billboard.pdf">
              <Card hoverable>
                <Card.Meta title="Eigel Deport Illegals Billboard" description="Click to download the PDF." />
              </Card>
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
