import React, { useState} from 'react'
import "./setForm.css";

const SetForm = ({createPost}) => {
    const [post, setPost] = useState({title: "", stack: ""})
    

    const addPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, 
            id: Date.now(),
           
        }
        createPost(newPost);
        setPost({title: "", stack: ""})
    }
    
    return (
        <form>
            
            <input className="setF"
                type="text"
                placeholder="Programming Language"
                value={post.title}
                onChange={(e) => setPost({...post, title: e.target.value})}
            />
            <input className="setF"
                type="text"
                placeholder="Stack"
                value={post.stack}
                onChange={(e) => setPost({...post, stack: e.target.value})}
            />
            <button onClick={addPost}
                className="add">
                Add Post
            </button>
            
        </form>
    )
}
export default SetForm;