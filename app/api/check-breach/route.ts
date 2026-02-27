import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    
    //  Simulation  
    const compromisedKeywords = ['test', 'hack', 'admin', 'pwned', 'monkhtor'];
    const isCompromised = compromisedKeywords.some(keyword => email.toLowerCase().includes(keyword));

    //  hud delay effect
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (isCompromised) {
      return NextResponse.json({
        isPwned: true,
        breaches: [
          'Facebook (533M Users) Data Leak', 
          'Adobe Creative Cloud Database Breach', 
          'LinkedIn Marketing Professional Dump',
          'Kage System Intrusion Trace'
        ],
        message: "SECURITY ALERT: Multiple data leaks detected."
      });
    } else {
      return NextResponse.json({
        isPwned: false,
        breaches: [],
        message: "SYSTEM SCAN: Account appears to be clean."
      });
    }

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}