import React from 'react';
import './home.css';

export function Home({user}){
    const [counter, setCounter] = React.useState(1);
    const [posts, setPosts] = React.useState([]);


    React.useEffect(() => {
        fetch("/api/posts")
            .then((response) => response.json())
            .then((posts) => {
                setPosts(posts)
            });
    }, []);


    const fakePosts = [
        {
            title: "This is a title",
            content: "Why do melons have weddings? They cantelope.",
            username: "IRock"
        },
        {
            title: "Jokie Joke",
            content: "Watch what you say around the egg whites. They can't take a yolk.",
            username: "yourMom"
        },
        {
            title: "placeHolder",
            content: "Have some content",
            username: "DwaynJohnson"
        },
        {
            title: "Another one",
            content: "Youre not even reading these are you?",
            username: "TheRiddler"
        },
        {
            title: "This should be plenty",
            content: "But we might add one more, you might even say... another one",
            username: "someRapper"
        }
    ]

    React.useEffect(()=>{
        const interval = setInterval(()=>{
            const newPost = fakePosts[Math.floor(Math.random() * fakePosts.length)];
            const loadPost = async () =>{
                try{
                    const response = await fetch('/api/post', {
                        method: 'post',
                        body: JSON.stringify(newPost),
                        headers: {'Content-type': 'application/json; charset=UTF-8',}
                    })
                    fetch("/api/posts")
                        .then((response) => response.json())
                        .then((posts) => {
                            setPosts(posts)
                        });
                }catch(error){
                    console.log(error);
                }
            }
            loadPost();
            setCounter((prevcounter) => prevcounter + 1);
        }, 10000);

        return ()=> clearInterval(interval);
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