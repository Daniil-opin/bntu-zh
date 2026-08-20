interface ScholarshipInfo {
  scholarships: string;
  currency: string;
  paymentMethod: string;
}

// п.52 ТЗ: "Если подтверждённых данных о стипендиях нет, раздел не выводить".
// Поэтому data — опциональный проп, и при его отсутствии компонент
// возвращает null, а не рендерит пустую секцию или плейсхолдер.
// Сейчас подтверждённых данных о стипендиях нет — на странице этот
// компонент вызывается без data, значит блок не появится в HTML вообще.
export function ScholarshipInfo({ data }: { data?: ScholarshipInfo }) {
  if (!data) return null;

  return (
    <section aria-label="奖学金与缴费方式">
      <h2>奖学金与缴费方式</h2>
      <p>{data.scholarships}</p>
      <p>货币：{data.currency}</p>
      <p>付款方式：{data.paymentMethod}</p>
    </section>
  );
}
