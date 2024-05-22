'use client';

import { Button, Form } from 'antd';

const ContinueButton = ({ text, ...property }) => {
  return (<Form.Item label={property?.label} name={property.name}>
    <Button type="primary" {...property}>
      {text || 'Default text'}
    </Button>
  </Form.Item>
  );
}
export default ContinueButton;
