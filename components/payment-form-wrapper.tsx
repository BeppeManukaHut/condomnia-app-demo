"use client"
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

const MyComponent = () => {
  const searchParams = useSearchParams();
  const [invoiceId, setInvoiceId] = useState(null);
  const [amount, setAmount] = useState(null);

  useEffect(() => {
    const initialInvoiceId = searchParams?.get('invoice') ?? null;
    const initialAmount = searchParams?.get('amount') ?? null;

    setInvoiceId(initialInvoiceId);
    setAmount(initialAmount);
  }, []);

  return (
    <div>
      {/* ... JSX ... */}
    </div>
  );
};

export default MyComponent;

