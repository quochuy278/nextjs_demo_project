import styles from "./BlogItem.module.css";
import Button from "../ui/button";
import Link from "next/link";

const BlogItem = (props) => {
  const { title, author, date, blog, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const exploreLink = `/blogs/${id}`;

  return (
    <li className={styles.item}>
      {/* <div className={styles.content}>
          <div className={styles.summary}>
            <h2>{title}</h2>
            <div className={styles.date}>
              <time>{humanReadableDate}</time>
            </div>
            <div className={styles.address}>
              <h1>{author}</h1>
            </div>
          </div>
          <div className={styles.actions}>
            <Button link={exploreLink}>
              <span>Explore Event</span>
              <span className={styles.icon}>
                
              </span>
            </Button>
          </div>
        </div> */}
      <div className={styles.blog_post}>
        <div className={styles.img_pod}>
          <img
            className={styles.content_img}
            src="https://pbs.twimg.com/profile_images/890901007387025408/oztASP4n.jpg"
            alt={author}
          />
        </div>
        <div className={styles.container_copy}>
          <h3 className={styles.h3_content}>{humanReadableDate}</h3>
          <h1 className={styles.h1_content}>{title}</h1>
          <p className={styles.p_content}>{blog}</p>
        </div>
        <Link href={exploreLink}>
          
          <a className={styles.btn_primary} href={exploreLink}>
            Read More
          </a>
        </Link>
      </div>
    </li>
  );
};

export default BlogItem;
