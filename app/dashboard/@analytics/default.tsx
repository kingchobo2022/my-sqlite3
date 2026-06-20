export default function AnalyticsDefault() {
  // 주소가 매칭되지 않을 때 보여줄 안전한 기본 화면을 정의합니다.
  // 귀찮다면 기존 page.tsx의 내용을 그대로 복사해서 복크(Fallback) 값으로 쓰셔도 무방합니다!
  return (
    <div className="p-6 bg-indigo-50/50 rounded-3xl border border-indigo-100/50 text-slate-400">
      <h2 className="text-lg font-bold mb-2">📊 분석 통계 (대기 중)</h2>
      <p className="text-sm">현재 메뉴에서는 통계 데이터가 비활성화됩니다.</p>
    </div>
  );
}