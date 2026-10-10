import { NextResponse } from 'next/server';
import { admissionFormSchema } from '@/lib/validations';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    const parseResult = admissionFormSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid submission data',
          errors: parseResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parseResult.data;
    
    // Generate unique application tracking number
    const currentYear = new Date().getFullYear();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const applicationNo = `LMM-${currentYear}-${randomSuffix}`;

    // Here a future FastAPI backend or database can be connected via process.env.BACKEND_API_URL
    // e.g., if (process.env.BACKEND_API_URL) await fetch(...)
    
    return NextResponse.json({
      success: true,
      message: 'Admission application successfully registered',
      applicationNo,
      studentName: data.studentName,
      desiredClass: data.desiredClass,
      guardianPhone: data.guardianPhone,
      submittedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Admission API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error while processing application' },
      { status: 500 }
    );
  }
}
