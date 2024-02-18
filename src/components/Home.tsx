import { useState } from "react";
import { Post } from "../App";

interface HomeProps {
    posts: Post[];
}


export const Home = (props: HomeProps) =>{
    const {posts} = props;
    return (
        <div>
            <h1>日記一覧</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
  }