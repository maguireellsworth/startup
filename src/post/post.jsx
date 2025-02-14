import React from 'react';
import './post.css';

export function Post(){
    return(
        <main>
            <form className="post-form">
                <div className="post-title">
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" name="varTitle" placeholder="Awesome Title"/>
                </div>
                <div className="post-content">
                    <label htmlFor="content">Content: </label>
                    <textarea placeholder="Write your story..." className="content-text"></textarea>
                </div>
                <div className="post-image">
                    <label htmlFor="image">Image: </label>
                    <input type="file" id="content" name="content" accept="image/png, image/jpeg" />
                </div>
                <button type="submit">Post!</button>
            </form>
        </main>
    )
}