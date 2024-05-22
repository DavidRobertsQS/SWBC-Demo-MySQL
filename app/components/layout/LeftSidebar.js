'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Layout, Row, Col, Menu } from 'antd';
import { SettingOutlined, HomeOutlined } from '@ant-design/icons';
import { createPage } from '@maestro/lib/composer';
import { useRouter } from 'next/navigation';
import { useMainContext } from '../../context/mainContext';

import Link from 'next/link';
const { Sider } = Layout;

const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};

const defaultItems = [
  getItem('Flood', 'sub1', <HomeOutlined />, [
    getItem(<Link href="/draft/quote-list">Quote Search</Link>, '1'),
    getItem('New Quote', '2'),
  ]),
  getItem('System Admin', 'sub2', <SettingOutlined />, [
    getItem('Create New Page', '3'),
  ]),
];

function renderSubItem(item) {
  if (item.link) {
    return getItem(<Link href={item.link}>{item.title}</Link>, item.id)
  }
  return getItem(<Link href={`http://localhost:1337/#${item.controller}/${item.action}`}>{item.title}</Link>, item.id)
}

function renderItems(items) {
  if (!items?.length) { return defaultItems; }

  return items?.map((parent) => {
    const children = parent.children.map(renderSubItem) || [];
    return getItem(parent.title, parent.id, null, children);
  });

}

const LeftSidebar = ({ items }) => {
  const router = useRouter();
  const { isNavOpen } = useMainContext();
  const [current, setCurrent] = useState('1');

  const onClick = (e) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    const handleCreatePage = () => {
      const { pageId } = createPage();

      if (pageId) {
        router.push(`/dashboard/maestro?pid=${pageId}`);
      }
    };

    if (current === '3') {
      handleCreatePage();
    }
  }, [current, router]);

  return (
    <Sider
      width={isNavOpen ? 300 : 0}
      className={`left-sidebar ${isNavOpen ? 'open' : 'closed'}`}
    >
      <Row align="middle" justify="space-around" className="logo">
        <Col>
          <Image
            src="/img/logo.png"
            width={230}
            height={60}
            alt="Quick Silver Systems"
          />
        </Col>
      </Row>

      <Menu
        onClick={onClick}
        className="sidebar-menu"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={renderItems(items)}
      />
    </Sider>
  );
};

export default LeftSidebar;
