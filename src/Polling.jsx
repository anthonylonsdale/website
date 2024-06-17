import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import sep2023ctabs from './polling/CROSSTABS - MO GOP Voters Sept 2023.pdf'
import sep2023tline from './polling/TOPLINE-MO GOP Voters Sept 2023[67].pdf'
import apr2024tline from './polling/MO_Statewide_Toplines_Release.pdf'
import apr2024ctabs from './polling/MO_Statewide_Crosstabs_Release.pdf'
import may2024ctabs from './polling/CROSSTABS - MO GOP Voters May 2024.pdf'
import may2024tline from './polling/TOPLINE-MO Primary Voters May 2024[30].pdf'

import jun2024ctabs from './polling/American-Dream-PAC-GOP-Primary-Brushfire-June24-Crosstabs.pdf'
import jun2024pres from './polling/American-Dream-PAC-GOP-Primary-Brushfire-June24-Presentation.pdf'
import jun2024tline from './polling/American-Dream-PAC-GOP-Primary-Brushfire-June24-Topline.pdf'
import jun2024verb from './polling/American-Dream-PAC-GOP-Primary-Brushfire-June24-Verbatims.pdf'
import apr2024amdreampres from './polling/American-Dream-PAC-GOP-Primary-Springfield-Brushfire-April24-Presentation (1).pdf'
import apr2024amdreamtline from './polling/American-Dream-PAC-GOP-Primary-Springfield-Brushfire-April24-Topline (1).pdf'
import apr2024amdreamverb from './polling/American-Dream-PAC-GOP-Primary-Springfield-Brushfire-April24-Verbatims (1).pdf'



const { Title } = Typography;

const Polling = () => {
  return (
    <div style={{padding: "20px"}}>
      <Title>Polling</Title>
      <div style={{ marginTop: '30px' }}>
        <Row gutter={[16, 16]}>
          <Col xs={12} sm={8} md={6}>
            <a href={sep2023tline} download="sep2023MIG-Topline.pdf">
              <Card hoverable>
                <Card.Meta title="09-2023 Toplines" description="September Peak Insights - Topline" />
              </Card>
            </a>
          </Col>
          <Col xs={12} sm={8} md={6}>
            <a href={sep2023ctabs} download="sep2023MIG-CrossTabs.pdf">
              <Card hoverable>
                <Card.Meta title="09-2023 Crosstabs" description="September Peak Insights - Crosstabs" />
              </Card>
            </a>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col xs={12} sm={8} md={6}>
            <a href={apr2024tline} download="apr2024ARW-Topline.pdf">
              <Card hoverable>
                <Card.Meta title="04-2024 Toplines" description="April ARW - Topline" />
              </Card>
            </a>
          </Col>
          <Col xs={12} sm={8} md={6}>
            <a href={apr2024ctabs} download="apr2024ARW-CrossTabs.pdf">
              <Card hoverable>
                <Card.Meta title="04-2024 Crosstabs" description="April ARW - Crosstabs" />
              </Card>
            </a>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col xs={12} sm={8} md={6}>
            <a href={may2024tline} download="may2024MIG-Topline.pdf">
              <Card hoverable>
                <Card.Meta title="05-2024 Topline" description="May Peak Insights - Topline" />
              </Card>
            </a>
          </Col>
          <Col xs={12} sm={8} md={6}>
            <a href={may2024ctabs} download="may2024MIG-CrossTabs.pdf">
              <Card hoverable>
                <Card.Meta title="05-2024 Crosstabs" description="May Peak Insights - Crosstabs" />
              </Card>
            </a>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col xs={12} sm={8} md={6}>
            <a href={jun2024tline} download="june2024-Topline.pdf">
              <Card hoverable>
                <Card.Meta title="06-2024 Topline" description="June Am Dream - Topline" />
              </Card>
            </a>
          </Col>
          <Col xs={12} sm={8} md={6}>
            <a href={jun2024ctabs} download="june2024-CrossTabs.pdf">
              <Card hoverable>
                <Card.Meta title="06-2024 Crosstabs" description="June Am Dream - Crosstabs" />
              </Card>
            </a>
          </Col>
          <Col xs={12} sm={8} md={6}>
            <a href={jun2024pres} download="june2024-Presentation.pdf">
              <Card hoverable>
                <Card.Meta title="06-2024 Presentation" description="June Am Dream - Presentation" />
              </Card>
            </a>
          </Col>
          <Col xs={12} sm={8} md={6}>
            <a href={jun2024verb} download="june2024-Verbatims.pdf">
              <Card hoverable>
                <Card.Meta title="06-2024 Verbatims" description="June Am Dream - Verbatims" />
              </Card>
            </a>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col xs={12} sm={8} md={6}>
            <a href={apr2024amdreamtline} download="april-2024-springfield-am-dream-Toplines.pdf">
              <Card hoverable>
                <Card.Meta title="04-2024 Topline" description="April Springfield Am Dream - Topline" />
              </Card>
            </a>
          </Col>
          <Col xs={12} sm={8} md={6}>
            <a href={apr2024amdreampres} download="april-2024-springfield-am-dream-Presentation.pdf">
              <Card hoverable>
                <Card.Meta title="04-2024 Presentation" description="April Springfield Am Dream - Presentation" />
              </Card>
            </a>
          </Col>
          <Col xs={12} sm={8} md={6}>
            <a href={apr2024amdreamverb} download="april-2024-springfield-am-dream-Verbatims.pdf">
              <Card hoverable>
                <Card.Meta title="04-2024 Springfield Verbatims" description="April Springfield Am Dream - Verbatims" />
              </Card>
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Polling;
