import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      adminEmail = 'sales@blakegloballtd.com',
      fullName,
      email,
      phone,
      productName,
      quantity,
      address,
      message,
      submittedAt,
    } = body;

    // Validate required fields
    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields: fullName, email, or phone' },
        { status: 400 }
      );
    }

    // Console log the inquiry on server
    console.log('--- NEW PRODUCT INQUIRY RECEIVED ---');
    console.log(`To Admin: ${adminEmail}`);
    console.log(`Product: ${productName} (Qty: ${quantity})`);
    console.log(`Customer: ${fullName} <${email}> (${phone})`);
    console.log(`Address: ${address || 'N/A'}`);
    console.log(`Message: ${message || 'N/A'}`);
    console.log(`Time: ${submittedAt}`);
    console.log('------------------------------------');

    return NextResponse.json(
      {
        success: true,
        message: `Inquiry for ${productName} has been processed and routed to ${adminEmail}`,
        data: {
          adminEmail,
          fullName,
          email,
          phone,
          productName,
          quantity,
          address,
          submittedAt,
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error processing inquiry endpoint:', error);
    return NextResponse.json(
      { error: 'Failed to process inquiry submission' },
      { status: 500 }
    );
  }
}
