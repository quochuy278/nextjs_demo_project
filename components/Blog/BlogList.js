import BlogItem from "./BlogItems";
import styles from "./BlogList.module.css";

const BlogList = (props) => {
  
  let filteredBlogs ;
  
  if (!props.blogs){
      filteredBlogs = props.myBlogs
  }
  else {
    filteredBlogs = props.blogs
  }
 
  

  return (
    <ul className={styles.list}>
      {filteredBlogs.map((blog) => (
        <BlogItem
          key={blog._id}
          id={blog._id}
          title={blog.title}
          author={blog.author}
          date={blog.lastModifed}
          blog={blog.blog}
        />
      ))}
    </ul>
  );
};

export default BlogList;
