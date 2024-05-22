'use client';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space, Typography } from 'antd';
const { Title } = Typography;

const HeaderGreeting = () => {
  return (
    <Space>
      <Avatar
        src="https://randomuser.me/api/portraits/men/22.jpg"
        size={34}
        icon={<UserOutlined />}
      />
      <Title level={4}>James Smithers</Title>
    </Space>
  );
};
export default HeaderGreeting;
