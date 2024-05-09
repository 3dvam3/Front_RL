
import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import Data from '@/app/lib/placeholder-data'; 
import { formatCurrency } from '../lib/utils';


export default async function Page() {

    const totalPaidInvoices    = Data.invoices.reduce( ( total, invoice ) => total + invoice.amount, 0 );
    const totalPendingInvoices = Data.invoices.reduce( (total, invoice) => invoice.status === 'Paid'? total + 1: total, 0 );
    const numberOfInvoices     = Data.invoices.length;
    const numberOfCustomers    = Data.customers.length;
    const revenue              = Data.revenue
    const latestInvoices       = Data.customers.map( user =>({
        ...user,
        amount: '0'
    }))
    return (
        <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
            Dashboard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card title="Collected" value={totalPaidInvoices} type="collected" />
            <Card title="Pending" value={totalPendingInvoices} type="pending" />
            <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
            <Card
            title="Total Customers"
            value={numberOfCustomers}
            type="customers"
            />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
            <RevenueChart revenue={revenue}  />
            <LatestInvoices latestInvoices={latestInvoices} /> 
        </div>
        </main>
    );
}
