"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deletePostAction(postId: number) {
    try {
        await prisma.post.delete({
            where: {
                id: postId,
            },
        });
    } catch (error) {
        console.error("삭제 중 에러 발생: ", error);
        throw new Error("게시글을 삭제하는 데 실패했습니다.");
    }

    revalidatePath("/");
    redirect("/post-list");
}