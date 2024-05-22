'use client';

import { Button, Form } from 'antd';

const AddNewLocation = ({ text, ...property }) => {
  return (<Form.Item label={property?.label} name={property.name}>
    <Button type="primary" {...property}>
      {text || 'Default text'}
    </Button>
  </Form.Item>
  );
}
export default AddNewLocation;
