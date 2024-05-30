import Pagination from '@/app/ui/quotes/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/quotes/table';
import { CreateQuote } from '@/app/ui/quotes/buttons';
import { lusitana } from '@/app/ui/fonts';
import { QuotesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchQuotesPages } from '@/app/lib/data';
import { Metadata } from 'next';
// import { toast } from "react-toastify";
 
export const metadata: Metadata = {
  title: 'Quotes',
};
 
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    updated?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchQuotesPages(query);

  const updatedQuote = searchParams?.updated || '';
  console.log('updatedQuote: ', updatedQuote);

  // if (updatedQuote) {
  //   toast.success("Submit");
  // }
  // toast.success("Submit");

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Quotes</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search Quotes..." />
        <CreateQuote />
      </div>
      <Suspense key={query + currentPage} fallback={<QuotesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}