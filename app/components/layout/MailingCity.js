'use client';

import { Input, Form } from "antd";

const MailingCity = (property) => {
    return (
      <Form.Item label={property?.label} name={property.name}>
        <Input {...property} />
      </Form.Item>
    );
  };
export default MailingCity;
