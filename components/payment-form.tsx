"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  cardHolder: z.string().min(2, {
    message: "Il nome del titolare deve essere di almeno 2 caratteri.",
  }),
  cardNumber: z.string().regex(/^(\d{4}\s?){4}$/, {
    message: "Inserisci un numero di carta valido.",
  }),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
    message: "Inserisci una data di scadenza valida (MM/YY).",
  }),
  cvv: z.string().regex(/^\d{3,4}$/, {
    message: "Inserisci un CVV valido (3 o 4 cifre).",
  }),
})

const formatExpiryDate = (value: string) => {
  const cleanValue = value.replace(/[^\d]/g, '').slice(0, 4);
  if (cleanValue.length > 2) {
    return `${cleanValue.slice(0, 2)}/${cleanValue.slice(2)}`;
  }
  return cleanValue;
};

export function PaymentForm() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardHolder: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Pagamento inviato",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="cardHolder"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Titolare della Carta</FormLabel>
              <FormControl>
                <Input placeholder="Mario Rossi" {...field} />
              </FormControl>
              <FormDescription>
                Inserisci il nome come appare sulla carta.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cardNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Numero della Carta</FormLabel>
              <FormControl>
                <Input
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\s/g, '');
                    if (value.length <= 16) {
                      e.target.value = value.replace(/(.{4})/g, '$1 ').trim();
                      field.onChange(e);
                    }
                  }}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="expiryDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Data di Scadenza</FormLabel>
                <FormControl>
                  <Input
                    placeholder="MM/YY"
                    maxLength={5}
                    onChange={(e) => {
                      e.target.value = formatExpiryDate(e.target.value);
                      field.onChange(e);
                    }}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cvv"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CVV</FormLabel>
                <FormControl>
                  <Input
                    placeholder="123"
                    maxLength={4}
                    onChange={(e) => {
                      e.target.value = e.target.value.replace(/[^\d]/g, '').slice(0, 4);
                      field.onChange(e);
                    }}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Invia Pagamento</Button>
      </form>
    </Form>
  )
}

