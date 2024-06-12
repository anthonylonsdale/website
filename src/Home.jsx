import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import eigelSign18x24 from './images/Eigel for Governor Yard Sign 18x24-1.png';
import eigelSign48x72 from './images/Eigel for Governor Yard Sign 48x72-1.png';
import eigelSign48x96 from './images/Eigel for Governor Yard Sign 48x96-1.png';
import palmCardPDF from './images/Eigel_4x9_PalmCard_APRIL2024_lowres.pdf';
import billboarda from './images/eigel prop tax billboard b.pdf'
import billboardb from './images/eigel deport billboard b.pdf'
import proofa from './images/Eigel for Governor Sign 4x8 (1).pdf'
import proofb from './images/Eigel for Governor Sign 4x8-deport illegals.pdf'
import proofc from './images/Eigel for Governor Sign 4x8-property tax.pdf'
import proofd from './images/Eigel for Governor Yard Sign 16x26 (1).pdf'
import proofe from './images/Eigel for Governor Yard Sign 16x26-depor illegals.pdf'
import prooff from './images/Eigel for Governor Yard Sign 16x26-property tax.pdf'

const { Title } = Typography;

const Home = () => {
  return (
    <div style={{padding: "20px"}}>
      <Title>Home Page</Title>
      <p>Welcome to the information page. Here you can find images and download links for PDFs.</p>

      <div>
        <h2>Images</h2>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <a href={eigelSign18x24} download="Eigel_Yard_Sign_18x24.png">
              <Card hoverable>
                <Card.Meta title="Eigel Yard Sign 18x24" description="Click to download the Image."/>
              </Card>
            </a>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <a href={eigelSign48x72} download="Eigel_Yard_Sign_48x72.png">
              <Card hoverable>
                <Card.Meta title="Eigel Yard Sign 48x72" description="Click to download the Image."/>
              </Card>
            </a>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <a href={eigelSign48x96} download="Eigel_Yard_Sign_48x96.png">
              <Card hoverable>
                <Card.Meta title="Eigel Yard Sign 48x96" description="Click to download the Image."/>
              </Card>
            </a>
          </Col>
        </Row>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>PDF Downloads</h2>
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
                <a href={proofa} download="Eigel for Governor Sign 4x8.pdf">
                    <Card hoverable>
                        <Card.Meta title="Download Eigel 4x8" description="Click to download the PDF." />
                    </Card>
                </a>
            </Col>
            <Col xs={24} sm={12} md={8}>
                <a href={proofb} download="Eigel for Governor Sign 4x8-deport-illegals.pdf">
                    <Card hoverable>
                        <Card.Meta title="Download Eigel 4x8 Deport Illegals" description="Click to download the PDF." />
                    </Card>
                </a>
            </Col>
            <Col xs={24} sm={12} md={8}>
                <a href={proofc} download="Eigel for Governor Sign 4x8-property-tax.pdf">
                    <Card hoverable>
                        <Card.Meta title="Download Eigel 4x8 Property Tax" description="Click to download the PDF." />
                    </Card>
                </a>
            </Col>
        </Row>
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
                <a href={proofd} download="Eigel for Governor Yard Sign 16x26.pdf">
                    <Card hoverable>
                        <Card.Meta title="Download Eigel 16x26" description="Click to download the PDF." />
                    </Card>
                </a>
            </Col>
            <Col xs={24} sm={12} md={8}>
                <a href={proofe} download="Eigel for Governor Yard Sign 16x26-deport-illegals.pdf">
                    <Card hoverable>
                        <Card.Meta title="Download Eigel 16x26 Deport Illegals" description="Click to download the PDF." />
                    </Card>
                </a>
            </Col>
            <Col xs={24} sm={12} md={8}>
                <a href={prooff} download="Eigel for Governor Yard Sign 16x26-property-tax.pdf">
                    <Card hoverable>
                        <Card.Meta title="Download Eigel 16x26 Property Tax" description="Click to download the PDF." />
                    </Card>
                </a>
            </Col>
        </Row>
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
                <a href={palmCardPDF} download="Eigel_Palm_Card.pdf">
                    <Card hoverable>
                        <Card.Meta title="Download Eigel Palm Card" description="Click to download the PDF." />
                    </Card>
                </a>
            </Col>
        </Row>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>Billboard Designs</h2>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={8}>
            <a href={billboarda} download="Eigel_Prop_Tax_Billboard.pdf">
              <Card hoverable>
                <Card.Meta title="Eigel Prop Tax Billboard" description="Click to download the PDF." />
              </Card>
            </a>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <a href={billboardb} download="Eigel_Deport_Billboard.pdf">
              <Card hoverable>
                <Card.Meta title="Eigel Deport Billboard" description="Click to download the PDF." />
              </Card>
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
