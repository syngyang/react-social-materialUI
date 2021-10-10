import { MoreVert } from '@mui/icons-material'
import './post.css';
import { Users } from '../../dummyData'
import { useState } from 'react';


export default function Post({ post }) {
    // console.log(post)
    // const user = Users.filter(u=>u.id===1)
    // console.log(user[0].username)
    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)

    const likehandler = ()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
    return (
        <div className="postContainer">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Users.filter(user=>user.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                        <span className="postUsername">
                            {Users.filter(user=>user.id === post.userId)[0].username}
                        </span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src="/assets/post/1.jpeg" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="likeIcon" onClick={likehandler} />
                        <img src="/assets/heart.png" alt="" className="likeIcon" onClick={likehandler} />
                        <span className="postLikeCounter">{like}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
