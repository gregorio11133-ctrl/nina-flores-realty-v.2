import { NextRequest, NextResponse } from 'next/server';
import { getResend, NINA_EMAIL } from '@/lib/resend';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, loan_amount, notes } = body;

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email required' }, { status: 400 });
  }

  try {
    await getResend().emails.send({
      from: 'Nina Flores Realty <no-reply@ninafloresrealty.com>',
      to: NINA_EMAIL,
      subject: `Pre-Qualification Request: ${name}`,
      html: `
        <h2>Pre-Qualification Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone ?? 'Not provided'}</p>
        <p><strong>Estimated Home Price:</strong> ${loan_amount ?? 'Not provided'}</p>
        <p><strong>Notes:</strong><br>${notes ?? 'None'}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
