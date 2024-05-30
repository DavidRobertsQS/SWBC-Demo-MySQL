'use client';

import { Input, Form } from "antd";

const MailingAddress = (property) => {
  console.log('MailingAddress properties: ', property);
    return (
      <Form.Item label={property?.label} name={property.name} rules={property.rules}>
        <Input {...property} />
      </Form.Item>
    );
  };
export default MailingAddress;
