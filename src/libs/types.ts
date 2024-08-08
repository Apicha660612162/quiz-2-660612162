// You can define interfaces for all React components here.
interface CommentProps {
ImagePath: string;
username: string;
commentTitle: string;
replies: string[];
likes : string[];
}
export type { CommentProps };

// Do not forget to export properly.


interface ReplyProps {
 ImagePath: string;
 username : string;
 replyTitle: string;
 likes: number;}

export type { ReplyProps };
//userlmagePath,username,commentText,likenum,repies

interface PostOwnnerProps {
    userlmagePath: string;
    username: string;
    commentText: string;
    likenum: number;
    repies: ReplyProps[];
}
export type { PostOwnnerProps};