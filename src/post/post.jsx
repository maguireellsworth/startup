import React from 'react';
import './post.css';
import { useNavigate } from 'react-router-dom';


export function Post(user){
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");
    const [posts, setPosts] = React.useState(JSON.parse(localStorage.getItem("posts")) || []);
    const [image, setImage] = React.useState(null);
    const navigate = useNavigate();
    
    function titleChange(e){
        setTitle(e.target.value);
    }

    function contentChange(e){
        setContent(e.target.value);
    }

    function makePost(){
        posts.push(JSON.stringify({title: title, content: content, username: user.user, image: image}))
        setPosts(posts);
        localStorage.setItem("posts", JSON.stringify(posts));
        navigate("/home");
    }

    function imgUpload(e){
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = ()=>{
                setImage(reader.result);
            }
        }
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
                    <input type="file" onChange={imgUpload} accept="image/png, image/jpeg" />
                </div>
                <button type="submit" onClick={makePost}>Post!</button>
            </form>
        </main>
    )
}