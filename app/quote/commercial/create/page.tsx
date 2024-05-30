import Form from '@/app/ui/quotes/edit-form';
import Breadcrumbs from '@/app/ui/quotes/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';
import QuoteSteps from '@/app/components/layout/QuoteSteps';
import { Suspense } from 'react';
import { CardSkeleton } from '@/app/ui/skeletons';
 
export const metadata: Metadata = {
  title: 'Create Quote',
};
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Suspense fallback={<CardSkeleton />}>
      <QuoteSteps />
      </Suspense>
      <Form customers={customers} />
    </main>
  );
}