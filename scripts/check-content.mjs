// Проверка перед выкладкой в production: ищет по всему исходному коду
// маркер TODO_VERIFY (наш аналог запрещённых по п.9 ТЗ плейсхолдеров
// вида 【待核实】/ TO VERIFY). Если найдено хоть одно вхождение —
// скрипт завершается с ошибкой (exit code 1) и списком мест.
//
// Запуск: npm run check:content
// ВАЖНО: этот скрипт НЕ встроен в обычный `npm run build`, чтобы можно
// было спокойно собирать и смотреть проект во время разработки, пока
// контент ещё не утверждён. Перед реальным деплоем в production
// обязательно запустить `npm run check:content` — билд не должен
// уезжать в прод, пока эта проверка не пройдёт с чистым результатом.

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dirname, "..", "src");
const MARKER = "TODO_VERIFY";
const EXTENSIONS = [".ts", ".tsx"];

function walk(dir, results) {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath, results);
    } else if (EXTENSIONS.some((ext) => entry.endsWith(ext))) {
      results.push(fullPath);
    }
  }
  return results;
}

const files = walk(ROOT, []);
const violations = [];

for (const file of files) {
  const content = readFileSync(file, "utf-8");
  content.split("\n").forEach((line, index) => {
    if (line.includes(MARKER)) {
      violations.push(`${file}:${index + 1}  ${line.trim()}`);
    }
  });
}

if (violations.length > 0) {
  console.error(
    `\n❌ Найдено ${violations.length} непроверенных плейсхолдеров (${MARKER}).\n` +
      "По п.9 ТЗ production-сборка не должна их содержать. Список:\n"
  );
  violations.forEach((v) => console.error("  " + v));
  console.error("\nЗамените все значения на подтверждённые перед деплоем.\n");
  process.exit(1);
} else {
  console.log(`✅ Плейсхолдеров ${MARKER} не найдено — контент готов к production.`);
  process.exit(0);
}
