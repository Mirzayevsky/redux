import React from "react";
import AddPostForm from "./app/features/post/AddPostForm";
import PostList from "./app/features/post/PostList";
const App = () => {
    return(
       <div>
        <AddPostForm/>
        <PostList/>
       </div>
    )
}
export default App;