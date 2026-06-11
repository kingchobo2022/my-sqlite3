import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { deletePostAction } from "./action";

export default async function PostDetailPage({
    params,
}: Readonly<{
    params: Promise<{ id: string }>;
}>) {
    const reslovedParams = await params;
    const postId = parseInt(reslovedParams.id, 10);
    const post = await prisma.post.findUnique({
        where: {
            id: postId, // 검색 조건 지정!
        },
    });  

    if(!post) {
        notFound(); 
    }

    const deleteActionWithId = deletePostAction.bind(null, postId);

    return (
        <div className="max-w-xl mx-auto mt-16 p-8 bg-white rounded-3xl border border-slate-100 shadow-xl/50">
            <Link href="/post-list" className="inline-block text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded-lg mb-6 
            hover:bg-indigo-100 transition-colors">
            전체 목록으로 돌아가기      
            </Link>

            <form action={deleteActionWithId}>
                <button type="submit" className="text-xs font-bold text-rose-600 bg-rose-50 px-3 py-1.5 rounded-lg hover:bg-rose-100 action:scale-95 transition-all">
                    🗑️ 이 글 삭제하기
                </button>
            </form>

            <article>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-4">
                    {post.title}
                </h1>
                <div className="text-xs slate-400 font-mono mb-8 border-b pb-4">
                    작성일자 : {new Date(post.createdAt).toDateString()}
                </div>

                <p className="text-slate-700 text-base leading-relaxed whitespace-pre-wrap">
                    {post.content}
                </p>
            </article>
        </div>
    );

}