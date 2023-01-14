export interface IPostsReducerState {
    posts: IPost[] | null
    isLoading:boolean
}

export interface IPost {
    uuid: string
    title: string
    description: string
    image_url:string
    published_at:string
}