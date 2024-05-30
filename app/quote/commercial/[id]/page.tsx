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
    console.log('page id isssssssss: ', id);
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
      <h1 className='text-blue-600 text-2xl font-bold'>Commercial Flood Quote: {quote.quotecode}</h1>
      <h1 className='text-blue-600 text-sm'>Effective: {quote.effectivedate}</h1>
      <h1 className='text-blue-600 text-sm mb-5'>{quote.organizationname} - {quote.mailaddress1}, {quote.mailcity} {quote.mailstate} {quote.mailzip}</h1>
      
      <QuoteSteps />
      <Form quote={quote} customers={customers} agents={agents} applications={applications} />
    </main>
  );
}