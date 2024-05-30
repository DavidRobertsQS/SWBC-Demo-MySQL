'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

// Invoice
const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce
  .number()
  .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});
 
const CreateInvoice = FormSchema.omit({ id: true, date: true });
 
export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createInvoice(prevState: State, formData: FormData) {
  console.log('createInvoice prevState: ', prevState);
  console.log('createInvoice formData: ', formData);
  // Validate form using Zod
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  console.log('createInvoice validatedFields: ', validatedFields);
  console.log('createInvoice validatedFields.error.flatten().fieldErrors: ', validatedFields.error.flatten().fieldErrors);
 
  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }
  
  // Prepare data for insertion into the database
  const { customerId, amount, status } = validatedFields.data;
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];

    try {
      await sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
      `;
    } catch (error) {
      return {
        message: 'Database Error: Failed to Create Invoice.',
      };
    }

    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
  }

  // Use Zod to update the expected types
const UpdateInvoice = FormSchema.omit({ id: true, date: true });
 
// ...
 
export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  const amountInCents = amount * 100;
 
  try {
    await sql`
        UPDATE invoices
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
      `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }
 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}

// Quote
const FormSchemaQuote = z.object({
  quoteID: z.string(),
  quoteCode: z.string(),
  effectiveDate: z.string(),
  application: z.string(),
  mailaddress1: z.string(),
  mailaddress2: z.string(),
  mailcity: z.string(),
  mailstate: z.string(),
  mailzip: z.string(),
});
 
const CreateQuote = FormSchemaQuote.omit({});
 
export async function createQuote(formData: FormData) {
    const { quoteID, quoteCode, effectiveDate } = CreateQuote.parse({
      quoteID: formData.get('quoteID'),
      quoteCode: formData.get('quoteCode'),
      effectiveDate: formData.get('effectiveDate'),
    });

    try {
      await sql`
        INSERT INTO quotes (id, quoteCode, effectiveDate)
        VALUES (${quoteID}, ${quoteCode}, ${effectiveDate})
      `;
    } catch (error) {
      return {
        message: 'Database Error: Failed to Create Quote.',
      };
    }

    revalidatePath('/quote');
    redirect('/quote');
  }

  // Use Zod to update the expected types
const UpdateQuote = FormSchemaQuote.omit({});
 
// ...
 
export async function updateQuote(id: string, formData: FormData) {
  console.log('id: ', id);
  console.log('formData updateQuote: ', formData);
  console.log('formData.mailaddress1: ', formData.mailaddress1);
  // console.log('formData.application updateQuote: ', formData.get('application'));
  // const fdApp = parseInt(formData.get('application'));
  // console.log('formData fdApp: ', fdApp);
  const { quoteID, quoteCode, effectiveDate, application, mailaddress1, mailaddress2, mailcity, mailstate, mailzip } = UpdateQuote.parse({
    quoteID: formData.quoteID,
    quoteCode: formData.quoteCode,
    effectiveDate: formData.effectiveDate,
    application: formData.application,
    // application: fdApp,
    mailaddress1: formData.mailaddress1,
    mailaddress2: formData.mailaddress2,
    mailcity: formData.mailcity,
    mailstate: formData.mailstate,
    mailzip: formData.mailzip,
  });
  console.log('quoteID: ', quoteID);
  console.log('quoteCode: ', quoteCode);
  console.log('effectiveDate: ', effectiveDate);
  console.log('mailaddress1: ', mailaddress1);
  console.log('application: ', application);
  
  try {
    console.log('trying to update quote');
    await sql`
        UPDATE quotes
        SET quotecode = ${quoteCode}, effectiveDate = ${effectiveDate}, application = ${application}, mailaddress1 = ${mailaddress1}, mailaddress2 = ${mailaddress2}, mailcity = ${mailcity}, mailstate = ${mailstate}, mailzip = ${mailzip}
        WHERE id = ${quoteID}
      `;
  } catch (error) {
    console.log('error trying to update quote: ', error);
    throw new Error("Database Error: Failed to Update Quote.");
    return { message: 'Database Error: Failed to Update Quote.' };
  }
 
  revalidatePath('/quote');
  redirect('/quote');
}

export async function deleteQuote(id: string) {
  try {
    await sql`DELETE FROM quotes WHERE id = ${id}`;
    revalidatePath('/quote');
    return { message: 'Deleted Quote.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Quote.' };
  }
}
