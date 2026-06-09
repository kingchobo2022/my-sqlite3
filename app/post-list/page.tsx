import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function PostList() {
    const posts = await prisma.post.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });

    return (
        <div className="m-5">
            <h1 className="mb-5">글 목록</h1>
            <Link href="/">글쓰기</Link>

            {posts.length === 0 ? (
                <p className="text-center text-slate-400 py-12 text-sm">
                    아직 작성된 게시글이 없습니다. 첫 글을 남겨보세요.
                </p>
            ):(
                <div className="space-y-4">
                    {posts.map((post) => (
                        <article key={post.id}
                            className="p-6 bg-white rounded-3xl border border-slate-700 shadow-sm"
                        >
                            <h2 className="text-lg font-bold text-slate-800 mb-2">{post.title}</h2>
                            <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">{post.content}</p>
                            <div className="text-[11px] font-medium text-slate-400 font-mono">
                                {new Date(post.createdAt).toLocaleDateString()} 에 작성됨
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </div>
    )
}
