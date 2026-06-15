export { auth as proxy } from "@/auth";

export const config = {
    matcher: [
        "/post-list",
        "/post/:id/edit",
    ]
}