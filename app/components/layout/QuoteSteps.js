import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Divider, Steps } from 'antd';
import Link from 'next/link';
import clsx from 'clsx';

const QuoteSteps = ({ text, ...property }) => {
  const items = [
    {
      // title,
      description: 'Quote Details',
      link: '/quote/commercial/quote-details'
    },
    {
      // title,
      description: 'Contacts',
      link: '/quote/commercial/contacts'
    },
    {
      // title,
      description: 'Property Details',
    },
    {
      // title,
      description: 'Construction',
    },
    {
      // title,
      description: 'Contents / Limits',
    },
    {
      // title,
      description: 'Rate Results',
    },
  ];
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const onChange = (value) => {
    console.log('onChange22244:', value);
    setCurrent(value);
    router.push(items[value].link);
  };
  
  const title = '';
  const pathname = usePathname();
  console.log('pathnamessssssss: ', pathname);
  console.log('pathnamessssssss current: ', current);
  console.log('pathnamessssssss items[current].link: ', items[current].link);
  return (
    <>
      <Steps
        current={current}
        onChange={onChange}
        labelPlacement='vertical'
        {...property}
        items={items}
      />

      <Divider />

    </>
  );
};
export default QuoteSteps;