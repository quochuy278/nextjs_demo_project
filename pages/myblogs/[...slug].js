import EditBlogForm from "../../components/MyBlog/EditBlogForm";

const EditPage = (props) => {
    
    const blogData = props.data.data
    const blog = Object.assign({}, blogData)
  
  return <EditBlogForm blog={blog}/>;
};

export default EditPage;

export const getServerSideProps = async (context) => {
  const id = context.query.slug[0];
  
  const url = `http://localhost:3000/api/blogs/${id}`;
  const result = await fetch(url, {
    headers: {
      // update with your user-agent
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
      Accept: "application/json; charset=UTF-8",
    },
  });
 
const data = await result.json()
  return {
    props: { data},
  };
};

