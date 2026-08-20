import { NextRequest, NextResponse } from "next/server";

// Минимальная реализация: принимает заявку и логирует её на сервере.
// TODO: реальная интеграция с CRM/почтой/базой — нужны конкретные
// доступы (API-ключ CRM, SMTP и т.д.), которых нет в ТЗ и не были
// предоставлены. Без них дальше физически нечего подключать.
export async function POST(request: NextRequest) {
  const body = await request.json();

  const { name, email, programInterest } = body;

  if (!name || !email) {
    return NextResponse.json({ error: "缺少必填字段" }, { status: 400 });
  }

  // Пока просто логируем на сервере — видно в консоли/логах хостинга.
  console.log("[application submitted]", { name, email, programInterest });

  return NextResponse.json({ ok: true });
}
