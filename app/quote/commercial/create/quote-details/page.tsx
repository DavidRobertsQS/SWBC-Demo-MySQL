import Form from '@/app/ui/quotes/edit-form';
import Breadcrumbs from '@/app/ui/quotes/breadcrumbs';
import { fetchQuoteById, fetchCustomers, fetchAgents, fetchApplication } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import QuoteSteps from '@/app/components/layout/QuoteSteps';
import EffectiveDate from '@/app/components/layout/EffectiveDate';
 
export const metadata: Metadata = {
  title: 'Create Quote',
};
 
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [quote, customers, agents, applications] = await Promise.all([
      fetchQuoteById(id),
      fetchCustomers(),
      fetchAgents(),
      fetchApplication(),
    ]);
    
    // if (!quote) {
    //   notFound();
    // }
  return (
    <main>
      <QuoteSteps />
      <h1 className='text-blue-600 text-xl font-bold'>Quote Details</h1>
      <h1 className='text-blue-600 text-sm mb-5'>Enter Quote Information</h1>
      <Form quote={quote} customers={customers} agents={agents} applications={applications} />
    </main>
  );
}