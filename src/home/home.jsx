import React from 'react';
import './home.css';

export function Home({user}){
    const [counter, setCounter] = React.useState(1);
    const [posts, setPosts] = React.useState([]);
    const ws = React.useRef(null);


    React.useEffect(() => {
        const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
        const host = window.location.host;
        ws.current = new WebSocket(`${protocol}://${host}`);

        // ws.current = new WebSocket('ws://localhost:3000');
        ws.current.onmessage = (event) => {
            try{
                const data = JSON.parse(event.data);
                if(data.type === 'new-post'){
                    setPosts((posts) => [data.post, ...posts]);
                    // setPosts([...posts, data.post]);
                }
            }catch(e){
                console.warn("Received non-JSON message: ", event.data);
            }
            
        }

        fetch("/api/posts")
            .then((response) => response.json())
            .then((posts) => {
                setPosts(posts)
            });

        return () => {
            if(ws.current){
                ws.current.close();
            }
        }
    }, []);

    return(
        <main className="home">
            <h3 className="userWelcome">{user}'s feed</h3>
            <div className='post-container'>
                {posts.map((post, index) => {
                    // post = JSON.parse(post)
                    return(
                        <div className="post" key={index}>
                            <h2 className="title">{post.title}</h2>
                            <p className="content">{post.content}</p>
                            <img src={post.image} className="post-image"/>
                            <h4 className="user">{post.username}</h4>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}