'use client';
import { useMainContext } from '../../context/mainContext';
import {
  Layout,
  Row,
  Col,
  Input,
  Typography,
  Affix,
  Button,
  Space,
} from 'antd';
import HeaderGreeting from './Greeting';
import {
  SearchOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
const { Header } = Layout;
const { Title } = Typography;

const LayoutHeader = () => {
  const { isNavOpen, setIsNavOpen } = useMainContext();

  return (
    <Affix>
      <Header className="main-header">
        <Row justify="space-between" align="middle" gutter={30}>
          <Col>
            <Space size="middle">
              <Button
                type="text"
                icon={isNavOpen ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
                onClick={() => setIsNavOpen(!isNavOpen)}
              />
              <Title level={2}>Quote Search</Title>
            </Space>
          </Col>
          <Col>
            <Row gutter={30}>
              <Col>
                <Input
                  size="large"
                  className="search"
                  placeholder="Search ..."
                  prefix={<SearchOutlined style={{ color: '#c9ced6' }} />}
                />
              </Col>
              <Col>
                <HeaderGreeting />
              </Col>
            </Row>
          </Col>
        </Row>
      </Header>
    </Affix>
  );
};
export default LayoutHeader;
