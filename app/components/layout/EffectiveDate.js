'use client';

import { DatePicker, Form } from 'antd';
import dayjs from 'dayjs';

const EffectiveDate = (property) => {
  console.log('eff date properties: ', property);
  console.log('property.defaultValue: ', property.defaultValue);
  const defaultVal = (!property.defaultValue || property.defaultValue === '') ? '' : dayjs(property.defaultValue, 'YYYY-MM-DD');
  console.log('defval: ', defaultVal);
  return (
    <Form.Item label={property?.label} name={property.name}>
      <DatePicker {...property} style={{ width: '100%' }} defaultValue={defaultVal} />
    </Form.Item>
  );
};

export default EffectiveDate;
