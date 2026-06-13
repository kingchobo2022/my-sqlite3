import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { updatePostAction } from "../action";

export default async function PostEditPage({
    params,
}: Readonly<{
    params: Promise<{id: string}>;    
}>) {
    const resvolvedParams = await params;
    const postId = parseInt(resvolvedParams.id, 10);
    
    const post = await prisma.post.findUnique({
        where: {id: postId},
    });

    if(!post) { notFound(); }

    const updatePostActionWithId = updatePostAction.bind(null, postId);

    return (
        <div className="max-w-md mx-auto mt-12 p-8 bg-white rounded-3xl shadow-xl border border-slate-100">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-black text-slate-800">게시글 수정하기</h1>
                <Link href={`/post/${post.id}`} className="text-xs text-slate-400 hover:underline">취소</Link>
            </div>

            <form action={updatePostActionWithId} className="space-y-4">
                <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-1">제목</label>
                    <input type="text" name="title"
                        defaultValue={post.title}
                    className="w-full p-3 rounded-xl border text-sm focus:outline-indigo-600" required />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-1">내용</label>
                    <textarea name="content"
                        defaultValue={post.content ?? ""}
                        rows={5}
                        className="w-full p-3 rounded-xl border text-sm focus:outline-indigo-600"
                        required
                    >
                    </textarea>
                </div>

                <button type="submit" className="w-full bg-slate-800 text-white py-3 rounded-xl font-bold
                 hover:bg-slate-900 transition-all">수정 완료하기</button>
            </form>
        </div>
    );
}