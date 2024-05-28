import Form from '@/app/ui/quotes/edit-form';
import Breadcrumbs from '@/app/ui/quotes/breadcrumbs';
import { fetchQuoteById, fetchCustomers, fetchAgents, fetchApplication } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import QuoteSteps from '@/app/components/layout/QuoteSteps';
 
export const metadata: Metadata = {
  title: 'Edit Quote',
};
 
export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [quote, customers, agents, applications] = await Promise.all([
        fetchQuoteById(id),
        fetchCustomers(),
        fetchAgents(),
        fetchApplication(),
      ]);
      
      if (!quote) {
        notFound();
      }
  return (
    <main>
      <QuoteSteps />
      {/* <Breadcrumbs
        breadcrumbs={[
          { label: 'Quotes', href: '/dashboard/quotes' },
          {
            label: 'Edit Quote',
            href: `/dashboard/quotes/${id}/edit`,
            active: true,
          },
          { label: 'Contacts', href: '/dashboard/contacts' },
        ]}
      /> */}
      <Form quote={quote} customers={customers} agents={agents} applications={applications} />
    </main>
  );
}