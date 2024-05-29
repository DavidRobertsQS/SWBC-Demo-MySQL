'use client';

import { Table } from 'antd';
import { UpdateQuote, DeleteQuote } from '@/app/ui/quotes/buttons';

const data = [
  {
    key: '1',
    insuredName: 'John Brown',
    planId: 'PP',
    dueDate: '4/20/2024',
    manufactured: 4,
    status: 'FL',
    actions: ['update','delete'],
  },
  {
    key: '2',
    insuredName: 'Jim Green',
    planId: 'PP',
    dueDate: '4/20/2024',
    manufactured: 3,
    status: 'FL',
  },
  {
    key: '3',
    insuredName: 'Joe Black',
    planId: 'PP',
    dueDate: '4/20/2024',
    manufactured: 2,
    status: 'FL',
  },
];

const Locations = (props) => {
  return <Table dataSource={data} {...props} bordered />;
};
export default Locations;
