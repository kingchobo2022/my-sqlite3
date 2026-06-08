"use client";

import { useActionState } from "react";
import { createPostWithValidation } from "./action";

export default function PostCreatePage() {

    const [state, formAction] = useActionState(createPostWithValidation, {
        success: false,
        message: "",
    });

    return (
        <div className="max-w-md mx-auto mt-12 p-8 bg-white rounded-3xl shadow-xl border border-slate-100">
            <h1 className="text-2xl font-black text-slate-800 mb-6">새글 작성하기 (Server Validation)</h1>

            <form action={formAction} className="space-y-4">
                <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-1">제목</label>
                    <input type="text" name="title" className="w-full p-3 rounded-xl border border-slate-200 focus:outline-indigo-600 text-sm" required />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-1">내용</label>
                    <textarea  name="content" className="w-full p-3 rounded-xl border border-slate-200 focus:outline-indigo-600 text-sm" required></textarea>
                </div>

                <button type="submit"
                    className="w-full bg-indigo-600 text-white py-3 rouded-xl font-bold hover:bg-indigo-700 active:scale-95 transition-all 
                    shadow-md shadow-indigo-100"
                >서버로 전송하기</button>

            </form>

            {state.message && (
                <div className={`mt6 p-4 rounded-xl text-sm font-semibold text-center border 
                    ${
                        state.success 
                        ? "bg-emerald-50 border-emerald-100 text-emerald-700"
                        : "bg-rose-50 border-rose-100 text-rose-700"
                    }`}>
                    {state.message}
                </div>
            )}

        </div>
    );
}