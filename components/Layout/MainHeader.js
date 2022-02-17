import Link from "next/link";
import Button from "../ui/button";
import styles from "./main-header.module.css";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">NextJs Restaurant</Link>
      </div>

      <nav className={styles.navigation}>
        <div>
          <ul>
            <li>
              <Link href="/menu">Menu</Link>
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
        </ul>
      </div>
    </header>
  );
};

export default MainHeader;
