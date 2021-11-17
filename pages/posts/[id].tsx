/* eslint-disable react-hooks/rules-of-hooks */
import { Article } from "../../components/Article";
import { Post } from "../index";
import {
  InferGetStaticPropsType,
  GetStaticPropsContext,
  GetStaticPaths,
} from "next";
import { BlogTitle, BlogContent } from "../index";

const BlogPost = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Article>
      <BlogTitle>Title:{post.title}</BlogTitle>
      <BlogContent>Content:{post.body}</BlogContent>
    </Article>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;
  const emptyBlog: Post = {
    title: "Not found",
    body: "",
    id: 0,
    userId: 0,
  };
  if (!params?.id) {
    return {
      props: {
        post: emptyBlog,
      },
    };
  }

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const post: Post = await res.json();

  return {
    props: {
      post,
    },
  };
};

export default BlogPost;
