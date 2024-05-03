import { EmailTemplate } from '@/components/email-template';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface emailBodyType {
    recipient: string [];
    subject: any;
    content: any;
}

export async function POST(req: NextRequest, res: NextResponse) {

    const emailBody= await req.json();
    console.log("emailBody" , emailBody)
    const { recipient, subject, content }: emailBodyType = emailBody;

    try {
        const data = await resend.emails.send({
            from: 'Quick setup <ndiakhate01998@gmail.com>',
            to: recipient,
            subject: subject,
            react: content,
        } as any);

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
  }