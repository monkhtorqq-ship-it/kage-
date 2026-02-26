import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // 1. Диплом дээр үзүүлэхэд зориулсан "Simulation" логик
    // Хэрэв и-мэйл хаягт 'test', 'hack', 'admin' орсон бол алдагдсан гэж харуулна
    const compromisedKeywords = ['test', 'hack', 'admin', 'pwned'];
    const isCompromised = compromisedKeywords.some(keyword => email.toLowerCase().includes(keyword));

    // 2. Сүлжээгээр дата хайж байгаа мэт харагдуулахын тулд 2 секунд хүлээлгэнэ
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (isCompromised) {
      return NextResponse.json({
        isPwned: true,
        breaches: [
          'Facebook (533M Users) Data Leak', 
          'Adobe Creative Cloud Database Breach', 
          'LinkedIn Marketing Professional Dump'
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