'use client';

import { CustomerField, QuoteForm, ApplicationField } from '@/app/lib/definitions';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateQuote } from '@/app/lib/actions';
import EffectiveDate from '@/app/components/layout/EffectiveDate';
import Application from '@/app/components/layout/Application';
import BrokerAgent from '@/app/components/layout/BrokerAgent';
import Locations from '@/app/components/layout/Locations';
import MailingAddress from '@/app/components/layout/MailingAddress';
import MailingAddress2 from '@/app/components/layout/MailingAddress2';
import MailingCity from '@/app/components/layout/MailingCity';
import MailingState from '@/app/components/layout/MailingState';
import MailingZip from '@/app/components/layout/MailingZip';

export default function EditQuoteForm({
  quote,
  customers,
  agents,
  applications,
}: {
  quote: QuoteForm;
  customers: CustomerField[];
  agents: CustomerField[];
  applications: ApplicationField[];
}) {
  const updateQuoteWithId = updateQuote.bind(null, quote.id);

  // const displayToast = (quote) => {
  //   updateQuote.bind(null, quote.id);
  //   toast.success("Submit");
  // };

  console.log('qqqqqqqqqquote: ', quote);
  console.log('customers: ', customers);
  console.log('applications: ', applications);
  // console.log('updateQuoteWithId: ', updateQuoteWithId);

  return (
    <form action={updateQuoteWithId}>
      <h1 className='text-blue-600 text-xl font-bold'>Quote Details</h1>
      <h1 className='text-blue-600 text-sm mb-5'>Enter Quote Information</h1>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <EffectiveDate label="Effective Date" name="effectiveDate" defaultValue={quote.effectivedatevalid} />
          {/* <Application label="Application" name="application" options={applications} defaultValue={quote.application} /> */}
          <label htmlFor="application" className="mb-2 block text-sm font-medium">
            Application
          </label>
          <div className="relative">
            <select
              id="application"
              name="application"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={quote.application}
            >
              <option value="" disabled>
                Select an application
              </option>
              {applications.map((application) => (
                <option key={application.value} value={application.value}>
                  {application.label}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
          <BrokerAgent label="Broker / Agent" name="brokeragent" options={agents} />
          <Locations columns={[{"title":"Location","dataIndex":"key"},{"title":"Limit","dataIndex":"dueDate"},{"title":"Contents","dataIndex":"insuredName"},{"title":"Step","dataIndex":"status"},{"title":"Actions","dataIndex":"actions"}]} />
          <MailingAddress label="Mailing Address" name="mailaddress1" defaultValue={quote.mailaddress1} className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500" />
          <MailingAddress2 label="Mailing Address 2" name="mailaddress2" defaultValue={quote.mailaddress2} className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500" />
          <MailingCity label="Mailing City" name="mailcity" defaultValue={quote.mailcity} className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500" />
          <MailingState label="Mailing State" name="mailstate" defaultValue={quote.mailstate} className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500" />
          <MailingZip label="Mailing ZIP" name="mailzip" defaultValue={quote.mailzip} className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500" />
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Choose customer
          </label>
          <div className="relative">
            <select
              id="customer"
              name="customerId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={quote.customer_id}
            >
              <option value="" disabled>
                Select a customer
              </option>
              {customers.map((customer) => (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Quote ID */}
        <div className="mb-4">
          <label htmlFor="quoteID" className="mb-2 block text-sm font-medium">
            Quote ID
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="quoteID"
                name="quoteID"
                type="text"
                defaultValue={quote.id}
                placeholder="Enter Quote ID"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Quote Code */}
        <div className="mb-4">
          <label htmlFor="quoteCode" className="mb-2 block text-sm font-medium">
            Quote Code
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="quoteCode"
                name="quoteCode"
                type="text"
                defaultValue={quote.quotecode}
                placeholder="Enter Quote Code"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Quote Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the quote status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="pending"
                  name="status"
                  type="radio"
                  value="pending"
                  defaultChecked={quote.status === 'pending'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Pending <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="paid"
                  name="status"
                  type="radio"
                  value="paid"
                  defaultChecked={quote.status === 'paid'}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="paid"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Paid <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/quotes"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Save Quote</Button>
      </div>
    </form>
  );
}
