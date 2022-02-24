import { getSession } from "next-auth/client";
import UserProfile from "../../components/Profile/UserProfile";
const ProfilePage = () => {
  return (
      <UserProfile/>
  )
};

export default ProfilePage;

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
