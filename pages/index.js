import axios from "axios";
import { Fragment, useEffect, useState } from "react";

import BlogList from "../components/Blog/BlogList";
import LoadingSpinner from "../components/ui/loadingspinner";
import styles from "../styles/Home.module.css";

const Home = (props) => {
  
 
  const allBlogs = props.data.data;
  console.log(process.env.url)
  if (!allBlogs) {
    return <LoadingSpinner />;
  } else if (props.data.length == 0 || allBlogs.length === 0 ) {
    return <p> No blog yet</p>
    
  }
  return (
    <Fragment>
      <BlogList blogs={allBlogs} />
    </Fragment>
  );
};

export default Home;

export const getServerSideProps = async (context) => {
  const url = `${process.env.url}api/blogs`;

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
