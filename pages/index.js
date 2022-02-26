import axios from "axios";
import { Fragment, useEffect, useState } from "react";

import BlogList from "../components/Blog/BlogList";
import LoadingSpinner from "../components/ui/loadingspinner";
import styles from "../styles/Home.module.css";

const Home = (props) => {
  console.log(props.data);
  // const [data,setData] =  useState()
  // useEffect(() => {
  //   const url = "http://localhost:3000/api/blogs";
  //   const result =await axios(url)
  //   const data = await result.json();

  //   setData(data)
  // }, [])

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
  const data = await result.json();
  return {
    props: {
      data,
    },
  };
};
