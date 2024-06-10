import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import sampleVideo1 from './videos/Eigel Formatted Kehoe Attack.mp4';
import sampleVideo2 from './videos/Eigel Video.mp4';

const { Title } = Typography;

const Footage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Title level={2}>Footage Page</Title>
      <p>Here you can find sample videos for your reference.</p>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Card
            hoverable
            cover={
              <video width="100%" controls>
                <source src={sampleVideo1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            }
          >
            <Card.Meta title="Sample Video 1" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            hoverable
            cover={
              <video width="100%" controls>
                <source src={sampleVideo2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            }
          >
            <Card.Meta title="Sample Video 2" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Footage;
