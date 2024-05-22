'use client';

import { Input, Form } from "antd";

const MailingAddress2 = (property) => {
    return (
      <Form.Item label={property?.label} name={property.name}>
        <Input {...property} />
      </Form.Item>
    );
  };
export default MailingAddress2;
