import React, { useState, useEffect } from 'react'
import axios from 'axios';

const RedditRetriever = () => {

    const [posts, setPosts] = useState([]);
    const [postsRetrievedAt, setPostsRetrievedAt] = useState(null);
    const [counter, setCounter] = useState(0);
    const redditUrl = 'https://www.reddit.com/r/reactjs.json';

    useEffect(() => {
        axios.get(redditUrl).then(response => {
                                const newPosts = response.data.data.children.map(c => c.data);
                                setPosts(newPosts);
                                setPostsRetrievedAt(new Date().toISOString());
                            });
    }, [counter]);

    const incrementCounter = () => {
        let currentCounter = counter;
        currentCounter++;
        setCounter(currentCounter);
    }

    const getPostsElement = () => {
        let elBuffer = [];

        if (posts.length) {
            elBuffer.push(<ul>{ posts.map(p => (<li key={p.id}>{p.title}</li>)) }</ul>);
        } else {
            elBuffer.push(<p>There are no posts</p>);
        }

        elBuffer.push(<p>Posts were retrieved at { postsRetrievedAt }</p>);

        return elBuffer;
    }

    return (
        <div id='reddit-retriever-container'>
            { getPostsElement() }

            <p>Counter: { counter } </p>
            <button onClick={ incrementCounter }>Click me to increment the counter</button>
        </div>
    );
};

export default RedditRetriever;