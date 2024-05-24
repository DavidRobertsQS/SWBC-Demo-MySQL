import Form from '@/app/ui/quotes/create-form';
import Breadcrumbs from '@/app/ui/quotes/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';
import QuoteSteps from '@/app/components/layout/QuoteSteps';
 
export const metadata: Metadata = {
  title: 'Create Quote',
};
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <QuoteSteps />
      {/* <Breadcrumbs
        breadcrumbs={[
          { label: 'Quotes', href: '/dashboard/quotes' },
          {
            label: 'Create Quote',
            href: '/dashboard/quotes/create',
            active: true,
          },
        ]}
      /> */}
      <Form customers={customers} />
    </main>
  );
}