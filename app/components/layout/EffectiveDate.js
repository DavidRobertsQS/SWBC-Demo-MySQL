'use client';

import { DatePicker, Form } from 'antd';

const EffectiveDate = (property) => {
  return (
    <Form.Item label={property?.label} name={property.name}>
      <DatePicker {...property} style={{ width: '100%' }} />
    </Form.Item>
  );
};

export default EffectiveDate;
