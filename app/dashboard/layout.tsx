// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
  analytics, // ★ @analytics 폴더의 page.tsx가 이 변수로 쏙 들어옵니다!
  team,      // ★ @team 폴더의 page.tsx가 이 변수로 쏙 들어옵니다!
}: Readonly<{
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}>) {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-3xl border shadow-xl/5">
      <h1 className="text-2xl font-black text-slate-900 mb-6 border-b pb-4">🔑 메인 시스템 관제 대시보드</h1>

      {/* 대시보드 기본 본문 (dashboard/page.tsx 내용 출력) */}
      <div className="mb-6">{children}</div>

      {/* 오늘의 하이라이트: Tailwind를 활용해 반반씩 병렬로 화면 배치 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>{analytics}</div>
        <div>{team}</div>
      </div>
    </div>
  );
}