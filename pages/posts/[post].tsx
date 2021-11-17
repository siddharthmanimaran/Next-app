/* eslint-disable react-hooks/rules-of-hooks */
import { Article } from "../../components/Article";
import { useRouter } from "next/router";

const post = () => {
  const router = useRouter();
  console.log(router.query);
  const { post } = router.query;

  return (
    <Article>
      <h1>Title:{post}</h1>
    </Article>
  );
};

export default post;
