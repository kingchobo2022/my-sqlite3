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

export async function updatePostAction(postId: number, formData: FormData) {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    try {

        await prisma.post.update({
            where: {
                id: postId,
            },
            data: {
                title: title,
                content: content,
            },
        }); 

        console.log(`DB에서 ${postId} 번 게시글이 성공적으로 수정되었습니다.`);

    } catch (error) {
        console.error("수정 중 에러 발생 : ", error);
        throw new Error("게시글을 수정하는데 실패했습니다.");
    }

    revalidatePath("/post-list");
    revalidatePath(`/post/${postId}`);

    redirect(`/post/${postId}`);
}