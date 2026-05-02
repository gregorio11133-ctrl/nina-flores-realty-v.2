import { NextRequest, NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase/server';
import { getResend, NINA_EMAIL } from '@/lib/resend';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, preferred_language, inquiry_type, message } = body;

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email required' }, { status: 400 });
  }

  try {
    const supabase = await createServiceClient();
    await supabase.from('leads').insert({ name, email, phone, preferred_language, inquiry_type, message });

    await getResend().emails.send({
      from: 'Nina Flores Realty <no-reply@ninafloresrealty.com>',
      to: NINA_EMAIL,
      subject: `New Lead: ${name} — ${inquiry_type ?? 'General Inquiry'}`,
      html: `
        <h2>New Lead from NinaFloresRealty.com</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone ?? 'Not provided'}</p>
        <p><strong>Language:</strong> ${preferred_language ?? 'en'}</p>
        <p><strong>Looking for:</strong> ${inquiry_type ?? 'Not specified'}</p>
        <p><strong>Message:</strong><br>${message ?? 'No message'}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
