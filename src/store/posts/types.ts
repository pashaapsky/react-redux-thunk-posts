export const ADD_POST = 'ADD_POST';

export interface IPost {
    id: number
    text: string
}

interface AddPostAction {
    type: typeof ADD_POST
    payload: IPost
}

export type PostActionTypes = AddPostAction