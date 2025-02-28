import React from 'react';
import './home.css';

export function Home({user}){
    const [posts, setPosts] = React.useState(JSON.parse(localStorage.getItem("posts")) || []);
    const [counter, setCounter] = React.useState(1);
    const fakePosts = [
        {
            title: "This is a title",
            content:" This is some content",
            username: "IRock"
        },
        {
            title: "This is another title",
            content:" This is some more content",
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
            posts.push(JSON.stringify(newPost))
            setPosts(posts);
            localStorage.setItem("posts", JSON.stringify(posts));
            setCounter(counter + 1);
        }, 5000)

        return ()=> clearInterval(interval);
    }, [counter]);

    return(
        <main className="home">
            <h3 className="userWelcome">{user}'s feed</h3>
            <div className='post-container'>
                {posts.map((post) => {
                    post = JSON.parse(post)
                    return(
                        <div className="post">
                        <h2 className="title">{post.title}</h2>
                        <p className="content">{post.content}</p>
                        <img src={post.image} className="post-image"/>
                        <h4 className="user">{post.username}</h4>
                    </div>
                    )
                })}
            </div>

            {/* <div className="post-container">
                <div className="post">
                    <h2 className="title">New Cauldron!</h2>
                    <p className="content">Better prepare for the spiciest potions youve never heard of!</p>
                    <img src="/witch_brew.jpg" className="post-image"/>
                    <h4 className="user">LocalWartlessWitch</h4>
                </div>
                <div className="post">
                    <h2 className="title">Sword shattered during last raid of ogre den</h2>
                    <p className="content">Looking for willing blacksmith to commission a new one and talented enchanter to imbue with Smite IV</p>
                    <h4 className="user">FeyHunter</h4>
                </div>
                <div className="post">
                    <h2 className="title">Funding Goal Reached!</h2>
                    <p className="content">Our first round of funding has reached its goal and we can now start on production of griffin down jackets!</p>
                    <img src="/furcoat.jpg" className="post-image" />
                    <h4 className="user">Layers&Litches</h4>
                </div>
                <div className="post">
                    <h2 className="title">Placeholder_Title</h2>
                    <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor interdum felis sed tempor. Etiam vitae lacus ac nibh varius luctus in vitae neque. Pellentesque scelerisque ipsum non nibh auctor hendrerit. Donec vitae dui enim. Donec a arcu neque. Etiam sed volutpat eros, eu imperdiet elit. </p>
                    <h4 className="user">Placeholder_user</h4>
                </div>
                <div className="post">
                    <h2 className="title">Placeholder_Title</h2>
                    <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor interdum felis sed tempor. Etiam vitae lacus ac nibh varius luctus in vitae neque. Pellentesque scelerisque ipsum non nibh auctor hendrerit. Donec vitae dui enim. Donec a arcu neque. Etiam sed volutpat eros, eu imperdiet elit. </p>
                    <h4 className="user">Placeholder_user</h4>
                </div>
                <div className="post">
                    <h2 className="title">Placeholder_Title</h2>
                    <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor interdum felis sed tempor. Etiam vitae lacus ac nibh varius luctus in vitae neque. Pellentesque scelerisque ipsum non nibh auctor hendrerit. Donec vitae dui enim. Donec a arcu neque. Etiam sed volutpat eros, eu imperdiet elit. </p>
                    <h4 className="user">Placeholder_user</h4>
                </div>
                <div className="post">
                    <h2 className="title">Placeholder_Title</h2>
                    <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor interdum felis sed tempor. Etiam vitae lacus ac nibh varius luctus in vitae neque. Pellentesque scelerisque ipsum non nibh auctor hendrerit. Donec vitae dui enim. Donec a arcu neque. Etiam sed volutpat eros, eu imperdiet elit. </p>
                    <h4 className="user">Placeholder_user</h4>
                </div>
                <div className="post">
                    <h2 className="title">Placeholder_Title</h2>
                    <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor interdum felis sed tempor. Etiam vitae lacus ac nibh varius luctus in vitae neque. Pellentesque scelerisque ipsum non nibh auctor hendrerit. Donec vitae dui enim. Donec a arcu neque. Etiam sed volutpat eros, eu imperdiet elit. </p>
                    <h4 className="user">Placeholder_user</h4>
                </div>
                <div className="post">
                    <h2 className="title">Placeholder_Title</h2>
                    <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor interdum felis sed tempor. Etiam vitae lacus ac nibh varius luctus in vitae neque. Pellentesque scelerisque ipsum non nibh auctor hendrerit. Donec vitae dui enim. Donec a arcu neque. Etiam sed volutpat eros, eu imperdiet elit. </p>
                    <h4 className="user">Placeholder_user</h4>
                </div>
                <div className="post">
                    <h2 className="title">Placeholder_Title</h2>
                    <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor interdum felis sed tempor. Etiam vitae lacus ac nibh varius luctus in vitae neque. Pellentesque scelerisque ipsum non nibh auctor hendrerit. Donec vitae dui enim. Donec a arcu neque. Etiam sed volutpat eros, eu imperdiet elit. </p>
                    <h4 className="user">Placeholder_user</h4>
                </div>
                <div className="post">
                    <h2 className="title">Placeholder_Title</h2>
                    <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor interdum felis sed tempor. Etiam vitae lacus ac nibh varius luctus in vitae neque. Pellentesque scelerisque ipsum non nibh auctor hendrerit. Donec vitae dui enim. Donec a arcu neque. Etiam sed volutpat eros, eu imperdiet elit. </p>
                    <h4 className="user">Placeholder_user</h4>
                </div>
                <div className="post">
                    <h2 className="title">Placeholder_Title</h2>
                    <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor interdum felis sed tempor. Etiam vitae lacus ac nibh varius luctus in vitae neque. Pellentesque scelerisque ipsum non nibh auctor hendrerit. Donec vitae dui enim. Donec a arcu neque. Etiam sed volutpat eros, eu imperdiet elit. </p>
                    <h4 className="user">Placeholder_user</h4>
                </div>
                <div className="post">
                    <h2 className="title">Placeholder_Title</h2>
                    <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor interdum felis sed tempor. Etiam vitae lacus ac nibh varius luctus in vitae neque. Pellentesque scelerisque ipsum non nibh auctor hendrerit. Donec vitae dui enim. Donec a arcu neque. Etiam sed volutpat eros, eu imperdiet elit. </p>
                    <h4 className="user">Placeholder_user</h4>
                </div>
                <div className="post">
                    <h2 className="title">Placeholder_Title</h2>
                    <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor interdum felis sed tempor. Etiam vitae lacus ac nibh varius luctus in vitae neque. Pellentesque scelerisque ipsum non nibh auctor hendrerit. Donec vitae dui enim. Donec a arcu neque. Etiam sed volutpat eros, eu imperdiet elit. </p>
                    <h4 className="user">Placeholder_user</h4>
                </div> */}
        </main>
    )
}