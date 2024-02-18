/** @jsxImportSource @emotion/react */
import { Post } from "../App";
import {container,homeTitle, list, item, title, content } from '../styles/HomeStyles';

interface HomeProps {
    posts: Post[];
}

export const Home = (props: HomeProps) =>{
    const {posts} = props;

    return (
        <div css={container}>
            <h1 css={homeTitle}>日記一覧</h1>
            <ul css={list}>
                {posts.map((post) => (
                    <li css={item} key={post.id}>
                        <h2 css={title}>{post.title}</h2>
                        <p css={content}>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
  }