import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './postSlice'
const reactionEmoji = {
    thumbsUp: 0,
    wow: 0,
    heart: 0,
    rocket: 0,
    coffee: 0,
}
const ReactionButtons = ({post}) => {
    const dispatch = useDispatch()
    const reactionButtons = Object.entries(reactionEmoji).map(([name,emoji]) => {
        return (
            <button 
             key={name}
             className='reactionButton'
             onClick={()=>dispatch(reactionAdded({postId:post.id,reaction:name}))} >
                {emoji} {post.reactions[name]}
            </button>
        )
       
    })
  
}

export default ReactionButtons