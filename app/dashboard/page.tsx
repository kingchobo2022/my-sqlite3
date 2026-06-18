// app/dashboard/page.tsx
import { auth } from "@/auth";

export default async function DashboardMainPage() {
  // 7단계에서 배운 보안 세션을 활용해 현재 로그인한 관리자 정보를 가져옵니다.
  const session = await auth();

  return (
    <div className="p-6 bg-slate-900 text-white rounded-3xl shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-xl font-black tracking-tight">
            👋 안녕하세요, {session?.user?.name ?? "관리자"}님!
          </h2>
          <p className="text-xs text-slate-400 mt-1 font-medium">
            종합 관제 시스템에 성공적으로 연결되었습니다. 현재 전체 시스템 상태는{" "}
            <span className="text-emerald-400 font-bold">정상</span>입니다.
          </p>
        </div>

        {/* 대시보드 상단 미니 지표 / 상태창 */}
        <div className="flex gap-3 text-xs font-mono font-bold">
          <div className="bg-slate-800 px-3 py-2 rounded-xl border border-slate-700/50">
            <span className="text-slate-400 mr-1.5">SERVER:</span>
            <span className="text-emerald-400">ONLINE</span>
          </div>
          <div className="bg-slate-800 px-3 py-2 rounded-xl border border-slate-700/50">
            <span className="text-slate-400 mr-1.5">PING:</span>
            <span className="text-indigo-400">14ms</span>
          </div>
        </div>
      </div>
    </div>
  );
}