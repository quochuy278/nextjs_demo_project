import styles from "./BlogItem.module.css";
import Button from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const BlogItem = (props) => {
  const { title, author, date, blog, id, editMode } = props;
  // console.log(props);
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const exploreLink = `/myblogs/${id}`;
  const editLink = `/myblogs/${id}/edit`;

  console.log(editMode);
  return (
    <li className={styles.item}>
      <div className={styles.blog_post}>
        <div className={styles.img_pod}>
          <img
            className={styles.content_img}
            src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg"
            alt={author}
          />
        </div>
        <div className={styles.container_copy}>
          <p className={styles.p_content}>{author}</p>
          <h3 className={styles.h3_content}>{humanReadableDate}</h3>
          <h1 className={styles.h1_content}>{title}</h1>
          <p className={styles.p_content}>{blog}</p>
        </div>
        <Link href={exploreLink}>
          <a className={styles.btn_primary}>Read More</a>
        </Link>
        {editMode && (
          <Link href={editLink}>
            <a className={styles.btn_primary}>Edit here</a>
          </Link>
        )}
      </div>
    </li>
  );
};

export default BlogItem;
