import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MyComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [invoiceId, setInvoiceId] = useState(null);
  const [amount, setAmount] = useState(null);

  useEffect(() => {
    // ... other code ...

    const initialInvoiceId = searchParams?.get('invoice') ?? null;
    const initialAmount = searchParams?.get('amount') ?? null;

    setInvoiceId(initialInvoiceId);
    setAmount(initialAmount);

    // ... other code ...
  }, [searchParams]);

  // ... rest of component code ...
  return (
    <div>
      {/* ... JSX ... */}
    </div>
  );
};

export default MyComponent;

