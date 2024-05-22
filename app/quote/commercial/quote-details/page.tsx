'use client';

import { useState, useEffect } from 'react';
import { Col, Row, Form } from 'antd';
import QuoteSteps from '@/app/components/layout/QuoteSteps';
import EffectiveDate from '@/app/components/layout/EffectiveDate';
import Application from '@/app/components/layout/Application';
import BrokerAgent from '@/app/components/layout/BrokerAgent';
// import InsuredName from '@/app/components/layout/InsuredName';
import Locations from '@/app/components/layout/Locations';
import AddNewLocation from '@/app/components/layout/AddNewLocation';
import MailingAddress from '@/app/components/layout/MailingAddress';
import MailingAddress2 from '@/app/components/layout/MailingAddress2';
import MailingCity from '@/app/components/layout/MailingCity';
import MailingState from '@/app/components/layout/MailingState';
import MailingZip from '@/app/components/layout/MailingZip';
import MailingCounty from '@/app/components/layout/MailingCounty';
import ContinueButton from '@/app/components/layout/ContinueButton';
import ExitButton from '@/app/components/layout/ExitButton';













const props = {
  layout: 'vertical',
};


const PageTemplate = (kwargs) => {
  const data = {
    insuredName: 'obob',
    insuredType: '1234'
  }
  const [ insuredName, setInsuredName ] = useState({name: data.insuredName});
  console.log('insuredName: ', insuredName);
  console.log('setInsuredName: ', setInsuredName);
  const handleClick = () => {
    setInsuredName('efef');
  }
  // handleClick();
  // setInsuredName('cdcd');
  /*beforeRender*/
  return (
    <><Form name="insuredForm" onFinish={function handleSubmit(values) {
      console.log({values});
    }}  layout="vertical" style={{marginTop: "50px", marginLeft: "50px"}}>
      {/* <label>
        First name:
        <input
          value={insuredName.name}
          onChange={e => {
            setInsuredName({
              ...insuredName,
              name: e.target.value
            });
          }}
        />
      </label> */}
      <Row gutter={[20,20]}><Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{"span":18,"push":3}}><QuoteSteps settings="" name="quotesteps" label="" /></Col></Row>
<Row gutter={[20,20]}><Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{"span":6}}><EffectiveDate label="Effective Date" name="effectivedate" /></Col>
<Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{"span":6}}><Application   label="Application" options={[{label: "Primary", value: "PR" }, {label: "Excess", value: "EX"}]} /></Col>
<Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{"span":8,"push":4,"pull":0}}><BrokerAgent   label="Broker / Agent" options={[{label: "Agent 001", value: "1"}, {label: "Agent 007", value: "7"}]} /></Col></Row>
{/* <Row gutter={[20,20]}><Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{}}><InsuredName label="Insured Name" name="insuredName" allowClear={true} value='3434' /></Col></Row> */}
<Row gutter={[20,20]}><Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{"span":24}}><Locations columns={[{"title":"Location","dataIndex":"key"},{"title":"Limit","dataIndex":"dueDate"},{"title":"Contents","dataIndex":"insuredName"},{"title":"Step","dataIndex":"status"},{"title":"Actions","dataIndex":"actions"}]} /></Col></Row>
<Row gutter={[20,20]}><Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{}}><AddNewLocation text="+Add New" name="addnewlocation" htmlType="button" type="primary" /></Col></Row>
<Row gutter={[20,20]}><Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{}}><MailingAddress label="Address 1" name="mailingaddress" /></Col></Row>
<Row gutter={[20,20]}><Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{}}><MailingAddress2 label="Address 2" name="mailingaddress2" /></Col></Row>
<Row gutter={[20,20]}><Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{"span":5}}><MailingCity label="City" name="mailingcity" /></Col>
<Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{"span":2}}><MailingState label="State" name="mailingstate" /></Col>
<Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{"span":3}}><MailingZip label="Zip" name="mailingzip" /></Col></Row>
<Row gutter={[20,20]}><Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{"span":6}}><MailingCounty   label="County" options={[{label: "County 001", value: "1"}, {label: "County 007", value: "7"}]} /></Col></Row>
<Row gutter={[20,20]}><Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{"span":3,"push":0}}><ContinueButton text="Continue" name="continuebutton" block={true} /></Col>
<Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{"span":3,"push":12}}><ExitButton text="Exit" name="exitbutton" danger={true} block={true} /></Col></Row>
<Row gutter={[20,20]}><Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{}}></Col>
<Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{}}></Col>
<Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{}}></Col>
<Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{}}></Col>
<Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{}}></Col>
<Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{}}></Col>
<Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{}}></Col>
<Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{}}></Col>
<Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{}}></Col>
<Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{}}></Col>
<Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{}}></Col>

</Row>
</Form>

    </>
  )
};

export default PageTemplate;