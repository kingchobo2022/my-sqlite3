"use server";

import { prisma } from "../lib/prisma";

export async function createPostWithValidation(prevState: any, formData: FormData) {
    const title = formData.get("title") as string; // 타입단언 type assertion
    const content = formData.get("content") as string;

    if(!title || title.length < 2) {
        return {
            success: false,
            message: "❌ 제목은 최소 2글자 이상 입력하셔야 합니다!",
        };
    }

    console.log("=== 서버 액션 작동 완료! ===");
    console.log("저정할 제목 : ", title);
    console.log("저장할 내용 : ", content);

    try {
        await prisma.post.create({
            data: {
                title: title.trim(),
                content: content?.trim() || null,
            }
        });
    } catch (error) {
        console.error("failed to create post:", error);
        return { error: "글을 등록하는 중 오류가 발생했습니다.", success: false };
    }

    return {
        success: true,
        message: "🎉 게시글이 성공적으로 등록되었습니다!",
    }
    
}