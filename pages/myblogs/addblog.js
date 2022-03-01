import AddBlogForm from "../../components/Blog/AddBlogForm";
import { getSession } from "next-auth/client";
import LoadingSpinner from "../../components/ui/loadingspinner";
import { useEffect, useState } from "react";
const AddBlogPage = (props) => {
  const [userData, setUsetdata] = useState();
  useEffect(async () => {
    const response = await fetch(`${process.env.url}api/auth/user`);
    const data = await response.json();
    setUsetdata(data);
  }, []);

  if (!userData) {
    return <LoadingSpinner />;
  }
  return <AddBlogForm userData={userData} />;
};

export default AddBlogPage;

export const getServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session) {
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
