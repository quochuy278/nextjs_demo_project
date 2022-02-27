import { getSession } from "next-auth/client";
import Link from "next/link";
import { Fragment, useState } from "react";
import BlogList from "../../components/Blog/BlogList";
import Button from "../../components/ui/button";
import LoadingSpinner from "../../components/ui/loadingspinner";
import styles from "./index.module.css";


const BlogPage = (props) => {
  // const [editable, setEditable] = useState(false)
  const session = props.session
  const userEmail = session.user.email 
  
  const {data} = props.data
  let filteredData = data.filter( blog => blog.author === userEmail )
  
  let editable;
  if(!filteredData){
    <LoadingSpinner/>
  } else {
    editable = true
  }

  

  return (
    <Fragment>
      <h3 className={styles.title}>Edit and review your blog here</h3>
      <BlogList blogs={filteredData} editMode={editable}/>
      <div className={styles.btn}>
        <Button>
          <Link href="/myblogs/addblog">Add blogs</Link>
        </Button>
      </div>
    </Fragment>
  );
};

export default BlogPage;

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  const url = "http://localhost:3000/api/blogs";
  const result = await fetch(url, {
    headers: {
      // update with your user-agent
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
      Accept: "application/json; charset=UTF-8",
    },
  });
 
const data = await result.json()
 
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session, data },
  };
};
