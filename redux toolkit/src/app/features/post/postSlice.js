import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState = [
    {
        id: 1,
        title: "Learning Redux Toolkit", 
        content: "I've hard good things",
        reactions:{
            thumbsUp:0,
            wow:0,
            heart:0,
            rocket:0,
            coffee:0,
        }
    },
    { 
      id: 2,
      title: "Slices...", 
      content: "The more I say slice, the more I want pizza" ,
      reactions:{
        thumbsUp:0,
        wow:0,
        heart:0,
        rocket:0,
        coffee:0,
    }
    }
]

const postsSlice = createSlice(({
    name: 'post',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        reactions:{
                            thumbsUp:0,
                            wow:0,
                            heart:0,
                            rocket:0,
                            coffee:0,
                        }
                    }
                }
            }
        },
        reactionAdded(state,action){
           const {postId,reaction} = action.payload;
           const exisitingPost = state.find(post => post.id === postId)
           if(exisitingPost){
            exisitingPost.reactions[reaction]++
           }
        }

    }

}))

export const selectAllPosts = (state) => state.posts
export const { postAdded ,reactionAdded} = postsSlice.actions
export default postsSlice.reducer;
