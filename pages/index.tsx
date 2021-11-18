import type { NextPage } from "next";
import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import styled from "@emotion/styled";
import Link from "next/link";

const Container = styled.div`
  padding: 0 2rem;
`;
const Main = styled.main`
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BlogTitle = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  color: red;
`;
export const BlogContent = styled.p`
  color: red;
`;
const List = styled.li`
  color: red;
`;

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <BlogTitle>Next JS + TypeScript</BlogTitle>
        <Link href="/about">About</Link>
        {posts.map((post) => (
          <ul key={post.id}>
            <List>{post.title}</List>
            <List>{post.body}</List>
          </ul>
        ))}
      </Main>
    </Container>
  );
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
