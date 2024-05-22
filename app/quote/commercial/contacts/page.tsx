'use client';

import { useState, useEffect } from 'react';
import { Col, Row, Form } from 'antd';
import QuoteSteps from '@/app/components/layout/QuoteSteps';
import Locations from '@/app/components/layout/Locations';
import AddNewLocation from '@/app/components/layout/AddNewLocation';
import ContinueButton from '@/app/components/layout/ContinueButton';
import ExitButton from '@/app/components/layout/ExitButton';













const props = {
  layout: 'vertical',
};


const PageTemplate = (kwargs) => {
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
<Row gutter={[20,20]}><Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{"span":24}}><Locations columns={[{"title":"Location","dataIndex":"key"},{"title":"Limit","dataIndex":"dueDate"},{"title":"Contents","dataIndex":"insuredName"},{"title":"Step","dataIndex":"status"},{"title":"Actions","dataIndex":"actions"}]} /></Col></Row>
<Row gutter={[20,20]}><Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{}}><AddNewLocation text="+Add New" name="addnewlocation" htmlType="button" type="primary" /></Col></Row>
<Row gutter={[20,20]}><Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{"span":3,"push":0}}><ContinueButton text="Continue" name="continuebutton" block={true} /></Col>
<Col xs={{"span":24,"offset":0}} sm={{"span":24,"offset":0}} md={{"span":12,"offset":0}} lg={{"span":12,"offset":0}} xl={{"span":12,"offset":0}} xxl={{"span":3,"push":12}}><ExitButton text="Exit" name="exitbutton" danger={true} block={true} /></Col></Row>
</Form>

    </>
  )
};

export default PageTemplate;