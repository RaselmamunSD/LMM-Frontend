import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    const parseResult = contactFormSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid contact form data',
          errors: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parseResult.data;
    const ticketId = `MSG-${Date.now().toString().slice(-6)}`;

    return NextResponse.json({
      success: true,
      message: 'Your message has been received by madrasa office',
      ticketId,
      name: data.name,
      receivedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error while sending message' },
      { status: 500 }
    );
  }
}
