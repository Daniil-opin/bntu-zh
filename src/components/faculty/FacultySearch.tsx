"use client";

import { useState } from "react";
import { Faculty } from "@/entities/faculty/types";
import { FacultyCard } from "./FacultyCard";

// Поиск в рамках текущей страницы (п.25 ТЗ), опциональный функционал.
// ВАЖНО: этот компонент — клиентский ("use client"), но Next.js всё
// равно рендерит его на сервере для первого ответа (SSR HTML). Пока
// пользователь ничего не ввёл (searchTerm === ""), рендерится ПОЛНЫЙ
// список факультетов — именно это увидит curl/поисковый робот.
// Фильтрация (сужение списка) происходит только в браузере ПОСЛЕ
// гидратации, когда пользователь печатает — это уже допустимая
// клиентская интерактивность (п.5 ТЗ).
export function FacultySearch({ faculties }: { faculties: Faculty[] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = searchTerm
    ? faculties.filter((f) => f.nameZh.includes(searchTerm))
    : faculties;

  return (
    <div>
      <label>
        搜索系与专业
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="输入系名称..."
        />
      </label>
      <div>
        {filtered.map((f) => (
          <FacultyCard key={f.slug} faculty={f} headingLevel="h2" />
        ))}
      </div>
    </div>
  );
}
