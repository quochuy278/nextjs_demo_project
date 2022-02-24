import { getSession } from "next-auth/client";
import Link from "next/link";
import { Fragment } from "react";
import BlogList from "../../components/Blog/BlogList";
import Button from "../../components/ui/button";
import styles from "./index.module.css";

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

const BlogPage = () => {
  return (
    <Fragment>
      <BlogList myBlogs={DUMMY_BLOGS} />
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
  console.log(session);

  if (!session) {
    sessionEmail = null;
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
};