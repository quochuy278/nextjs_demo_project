import { Fragment } from "react";

import BlogList from "../components/Blog/BlogList";
import LoadingSpinner from "../components/ui/loadingspinner";
import styles from "../styles/Home.module.css";

const DUMMY_BLOGS = [
  {
    id: "m1",
    title: "A first blog",
    author: "Huy",
    date: "02/08/2022",
    blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "m2",
    title: "Second blog",
    author: "lol",
    date: "05/23/2022",
    blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: "m3",
    title: "A third blog",
    author: "Bo",
    date: "8/08/2022",
    blog: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const Home = (props) => {
  console.log(props.data);
  const allBlogs = props.data.data;
  console.log(allBlogs);
  if (!allBlogs) {
    return <LoadingSpinner />;
  }
  return (
    <Fragment>
      <BlogList blogs={allBlogs} />
    </Fragment>
  );
};

export default Home;

export const getServerSideProps = async (context) => {
  const url = "http://localhost:3000/api/blogs";
  const result = await fetch(url, {
    headers: {
      // update with your user-agent
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
      Accept: "application/json; charset=UTF-8",
    },
  });
  console.log(result.data);
  return {
    props: {
      data: await result.json(),
    },
  };
};
