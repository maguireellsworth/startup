import React from 'react';
import './post.css';

export function Post(user){
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");
    const [posts, setPosts] = React.useState(JSON.parse(localStorage.getItem("posts")) || []);
    
    function titleChange(e){
        setTitle(e.target.value);
    }

    function contentChange(e){
        setContent(e.target.value);
    }

    function makePost(){
        posts.push(JSON.stringify({title: title, content: content, user: user}))
        setPosts(posts);
        localStorage.setItem("posts", JSON.stringify(posts));
    }

    return(
        <main>
            <form className="post-form">
                <div className="post-title">
                    <label htmlFor="title">Title: </label>
                    <input type="text" onChange={titleChange} placeholder="Awesome Title"/>
                </div>
                <div className="post-content">
                    <label htmlFor="content">Content: </label>
                    <textarea className="content-text" onChange={contentChange} placeholder="Write your story..."></textarea>
                </div>
                <div className="post-image">
                    <label htmlFor="image">Image: </label>
                    <input type="file" id="content" name="content" accept="image/png, image/jpeg" />
                </div>
                <button type="submit" onClick={makePost}>Post!</button>
            </form>
        </main>
    )
}