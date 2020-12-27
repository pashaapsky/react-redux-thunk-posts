export const LOAD_POSTS = "LOAD_POSTS";

export interface IAsyncPost {
    userId : number,
    id: number,
    title: string,
    body: string
}

interface LoadPostsAction {
    type: typeof LOAD_POSTS
    payload: IAsyncPost[]
}

export type AsyncPostsActionTypes = LoadPostsAction