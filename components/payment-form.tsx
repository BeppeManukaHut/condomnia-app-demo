"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

const formatExpiryDate = (value: string) => {
  const cleanValue = value.replace(/[^\d]/g, '').slice(0, 4);
  if (cleanValue.length > 2) {
    return `${cleanValue.slice(0, 2)}/${cleanValue.slice(2)}`;
  }
  return cleanValue;
};

export function PaymentForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    cardHolder: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })
  const [errors, setErrors] = useState({
    cardHolder: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (formData.cardHolder.length < 2) {
      newErrors.cardHolder = "Il nome del titolare deve essere di almeno 2 caratteri.";
      isValid = false;
    } else {
      newErrors.cardHolder = "";
    }

    if (!/^(\d{4}\s?){4}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = "Inserisci un numero di carta valido.";
      isValid = false;
    } else {
      newErrors.cardNumber = "";
    }

    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = "Inserisci una data di scadenza valida (MM/YY).";
      isValid = false;
    } else {
      newErrors.expiryDate = "";
    }

    if (!/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = "Inserisci un CVV valido (3 o 4 cifre).";
      isValid = false;
    } else {
      newErrors.cvv = "";
    }

    setErrors(newErrors);
    return isValid;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19);
    } else if (name === 'expiryDate') {
      formattedValue = formatExpiryDate(value);
    } else if (name === 'cvv') {
      formattedValue = value.replace(/[^\d]/g, '').slice(0, 4);
    }

    setFormData(prev => ({ ...prev, [name]: formattedValue }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      toast({
        title: "Pagamento inviato",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(formData, null, 2)}</code>
          </pre>
        ),
      })
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormItem>
        <FormLabel>Titolare della Carta</FormLabel>
        <FormControl>
          <Input
            name="cardHolder"
            placeholder="Mario Rossi"
            value={formData.cardHolder}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormDescription>
          Inserisci il nome come appare sulla carta.
        </FormDescription>
        {errors.cardHolder && <FormMessage>{errors.cardHolder}</FormMessage>}
      </FormItem>
      <FormItem>
        <FormLabel>Numero della Carta</FormLabel>
        <FormControl>
          <Input
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            value={formData.cardNumber}
            onChange={handleInputChange}
          />
        </FormControl>
        {errors.cardNumber && <FormMessage>{errors.cardNumber}</FormMessage>}
      </FormItem>
      <div className="flex space-x-4">
        <FormItem>
          <FormLabel>Data di Scadenza</FormLabel>
          <FormControl>
            <Input
              name="expiryDate"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleInputChange}
            />
          </FormControl>
          {errors.expiryDate && <FormMessage>{errors.expiryDate}</FormMessage>}
        </FormItem>
        <FormItem>
          <FormLabel>CVV</FormLabel>
          <FormControl>
            <Input
              name="cvv"
              placeholder="123"
              value={formData.cvv}
              onChange={handleInputChange}
            />
          </FormControl>
          {errors.cvv && <FormMessage>{errors.cvv}</FormMessage>}
        </FormItem>
      </div>
      <Button type="submit">Invia Pagamento</Button>
    </Form>
  )
}

