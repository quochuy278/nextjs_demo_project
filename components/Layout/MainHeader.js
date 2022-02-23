import Link from "next/link";
import Button from "../ui/button";
import styles from "./main-header.module.css";
import { Menu } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">NextJs Blog</Link>
      </div>

      <nav className={styles.navigation}>
        <div>
          <ul>
            <li>
              <Link href="/menu">All Blogs</Link>
            </li>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className={styles.formLink}>
        <ul>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/signup">Sign up</Link>
          </li>
          <li>
            <PersonIcon className={styles.icon} />
            <ul className="dropdown">
              <li>Welcome Huy</li>
              <li>
                <a href="#">MyBlog</a>
              </li>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Logout</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MainHeader;
