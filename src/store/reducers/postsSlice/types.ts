export interface IPostsReducerState {
    posts: IPost[] | []
    isLoading:boolean
}

export interface IPost {
    uuid: string
    title: string
    description: string
    image_url:string
    published_at:string
    snippet:string
}