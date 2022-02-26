import BlogItem from "./BlogItems";
import styles from "./BlogList.module.css";

const BlogList = (props) => {
  
  const {blogs , editMode} = props
  let editModification;
  if (!editMode){
    editModification = false
  }
  else {
    editModification =true
  }
  

  return (
    <ul className={styles.list}>
      {blogs.map((blog) => (
        <BlogItem
          key={blog._id}
          id={blog._id}
          title={blog.title}
          author={blog.author}
          date={blog.lastModifed}
          blog={blog.blog}
          editMode={editModification}
        />
      ))}
    </ul>
  );
};

export default BlogList;
