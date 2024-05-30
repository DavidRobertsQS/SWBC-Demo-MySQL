'use client';

import React, { Suspense, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Divider, Steps } from 'antd';
import Link from 'next/link';
import clsx from 'clsx';
import { notFound } from 'next/navigation';

const QuoteSteps = ({ ...property }) => {
  const items = [
    {
      // title,
      description: 'Quote Details',
      link: '/quote/create/quote-details'
    },
    {
      // title,
      description: 'Contacts',
      link: '/quote/create/contacts'
    },
    {
      // title,
      description: 'Property Details',
      link: '/quote/create/property-details'
    },
    {
      // title,
      description: 'Construction',
      link: '/quote/create/construction'
    },
    {
      // title,
      description: 'Contents / Limits',
      link: '/quote/create/limits'
    },
    {
      // title,
      description: 'Rate Results',
      link: '/quote/create/rate-results'
    },
  ];
  const router = useRouter();
  const pathname = usePathname();

  function getInitialStep() {
    const currentIndex = items.findIndex((item) => { return item.link === pathname});
    return currentIndex === -1 ? 0 : currentIndex;
  }

  const [current, setCurrent] = useState(getInitialStep());

  const onChange = (selectedStepIndex) => {
    setCurrent(selectedStepIndex);
    try {
      router.replace(items[selectedStepIndex].link)
    } catch (error) {
      notFound();
    }
  };
  
  const title = '';
  // const pathname = usePathname();
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