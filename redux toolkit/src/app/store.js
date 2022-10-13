import {configureStore} from "@reduxjs/toolkit"
import counterReducer  from "./features/counter/counterSlice"
import postsReducer  from "./features/post/postSlice"
import usersReducer from "./features/users/userSlice"

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        posts:postsReducer,
        users:usersReducer
    }
})
