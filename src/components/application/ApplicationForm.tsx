"use client";

import { useState } from "react";

// Форма как переиспользуемый компонент (п.20 ТЗ: <ApplicationForm />).
// Реальная отправка идёт на /api/apply (см. src/app/api/apply/route.ts).
// Это закрывает "технический" долг — сервер реально получает данные.
// Интеграция с конкретной CRM/почтой всё ещё не сделана: нужны реальные
// доступы (API-ключ, SMTP и т.д.), которых нет — это уже не вопрос кода.
export function ApplicationForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  if (status === "success") {
    return <p>提交成功，我们会尽快与您联系。</p>;
  }

  return (
    <div id="apply">
      <h2>立即申请</h2>
      <div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            setStatus("submitting");

            const formData = new FormData(e.currentTarget);
            try {
              const res = await fetch("/api/apply", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name: formData.get("name"),
                  email: formData.get("email"),
                  programInterest: formData.get("programInterest"),
                }),
              });
              setStatus(res.ok ? "success" : "error");
            } catch {
              setStatus("error");
            }
          }}
        >
          <div className="floating-field">
            <input id="application-name" name="name" placeholder=" " required />
            <label htmlFor="application-name">姓名</label>
          </div>
          <div className="floating-field">
            <input
              id="application-email"
              name="email"
              type="email"
              placeholder=" "
              required
            />
            <label htmlFor="application-email">邮箱</label>
          </div>
          <div className="floating-field">
            <input
              id="application-program-interest"
              name="programInterest"
              placeholder=" "
            />
            <label htmlFor="application-program-interest">意向专业</label>
          </div>
          <button type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "提交中..." : "提交申请"}
          </button>
          {status === "error" && <p>提交失败，请稍后重试。</p>}
        </form>
      </div>
    </div>
  );
}