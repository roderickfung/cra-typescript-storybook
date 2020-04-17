import React, { useEffect } from "react";
import { IPost } from 'interfaces/posts';
import { IUser } from 'interfaces/users';
import { IStateFromProps } from "./index";
import { PostWrapper, Wrapper } from "./styles";

const Post = ({ post, author }: any) => (
  <PostWrapper key={post.id}>
    <div style={{ fontWeight: "bold", fontSize: 16, margin: "5px" }}>{post.title}</div>
    <div>{author.name}</div>
    <div>{post.body}</div>
  </PostWrapper>
);

const Home = ({ users, posts, getUsers, getPosts }: IStateFromProps) => {

  useEffect(() => {
    getUsers();
    getPosts();
  }, [getPosts, getUsers]);

  return (
    <Wrapper>
      {
        posts.map((post: IPost) => {
          const author = users.find((user: IUser) => user.id === post.userId);
          console.log('author', author);
          return (
            <Post post={post} author={author} />
          );
        })
      }
    </Wrapper >
  );
};

export default Home;