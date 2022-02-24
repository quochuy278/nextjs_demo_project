import BlogList from "./BlogList";
import { getSession } from "next-auth/client";



const MyBlog = (props) => {

    console.log(props)

  return (
      <h1>Test</h1>
  );
};

export default MyBlog;


export const getServerSideProps = async (context) => {
    const session = await getSession({ req: context.req });
  
    return {
      props: { session },
    };
  };