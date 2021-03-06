import { useEffect, useState } from "react";
import { PostCard } from "./PostCard";
import { fetchPosts } from "../utils/index";

export const AllPosts = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts(setPosts);
    }, [])


    return (
        <div>
        {posts.map((item, index) => {
            return (
            <div>
                <PostCard key={index} name={item.name} content={item.content} />
                <h1>{props.logOnUser}</h1>
              </div>
            );
          })}</div>
    )
}