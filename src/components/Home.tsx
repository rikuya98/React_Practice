// ダミーデータ
interface Post {
    id: number;
    title: string;
    content: string;
  }
const posts: Post[] = [
    { id: 1, title: 'はじめまして！', content: '今日から日記を始めます！' },
    { id: 2, title: 'おすすめのカフェ', content: 'Hoge市のカフェはおすすめです！' },
    { id: 3, title: '勉強始めます', content: 'Reactの勉強始めます！' },
  ];

  export const Home = () =>{
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