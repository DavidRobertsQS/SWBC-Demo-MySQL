'use client';

import { Input, Form } from "antd";

const MailingZip = (property) => {
    return (
      <Form.Item label={property?.label} name={property.name}>
        <Input {...property} />
      </Form.Item>
    );
  };
export default MailingZip;
