'use server'

import { revalidatePath } from 'next/cache'

export async function processPayment(formData: FormData) {
  const cardNumber = formData.get('cardNumber')?.toString().replace(/\s/g, '');
  const expiry = formData.get('expiryDate')?.toString();
  const cvc = formData.get('cvv')?.toString();
  const invoiceNumber = formData.get('invoiceNumber')?.toString();
  const amount = formData.get('amount')?.toString();

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 5000));

  // Check for test card
  if (cardNumber === '1111111111111111' && expiry === '12/30') {
    revalidatePath('/dashboard/payments');
    return {
      success: true,
      message: 'Pagamento completato con successo!'
    };
  }

  revalidatePath('/dashboard/payments');
  return {
    success: false,
    message: 'Pagamento fallito. Per il test, usa la carta 1111 1111 1111 1111 con scadenza 12/30'
  };
}

export async function sendConfirmationEmail(email: string, invoiceNumber: string, amount: string) {
  // Simulate sending an email
  console.log(`Sending confirmation email to ${email} for invoice ${invoiceNumber} with amount €${amount}`);
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true };
}

