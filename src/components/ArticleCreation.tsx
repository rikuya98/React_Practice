/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { Post } from "../App";
import { useNavigate } from "react-router-dom";
import { container, title, input, submit } from '../styles/CreationStyles';


interface ArticleCreationProps {
    posts: Post[];
    setPosts: (posts: Post[]) => void;
}

export const ArticleCreation = (props: ArticleCreationProps) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {posts, setPosts} = props;
    const navigate = useNavigate();

    const AddArticle = () => {
        const newPosts = {id: posts.length + 1, title: title, content: content};
        setPosts([...posts, newPosts]);
        navigate('/', { state: { message: '記事を投稿しました' } });
    }
    return (
        <div css={container}>
            <p css={title}>記事作成</p>
                <input css={input} type="text" placeholder="タイトル" value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea css={input} placeholder="本文" value={content} onChange={(e) => setContent(e.target.value)} />
                <button css={submit} type="submit" onClick={AddArticle}>投稿</button>
        </div>
    )};