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
                <PostCard key={index} title={item.title} content={item.content} />
              </div>
            );
          })}</div>
    )
}