import styles from "./UserProfile.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Button from '../ui/button'
const UserProfile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className="col-md-7">
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src=""
                width="100"
                className={styles.img_content}
              />
            </div>
            <div className={styles.main_wrapper}>
              <div className={styles.pro_wrapper}>
                <div className={styles.pro}>Pro</div>
              </div>

              <h5 className={styles.name}>Huy Bui</h5>
              <div className={styles.profession}>
                <span>Front End Developer</span>
              </div>
              <div className={styles.text_wrapper}>
                <p>
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat.
                </p>
              </div>
              <div className={styles.ul_content}>
                <ul className={styles.list}>
                  <li>
                    <FacebookIcon className={styles.svg_icons}/>
                  </li>
                  <li>
                    <LinkedInIcon className={styles.svg_icons}/>
                  </li>
                  <li>
                    <InstagramIcon className={styles.svg_icons}/>
                  </li>
                </ul>
              </div>

              <div className="buttons">
                <Button>Message</Button>
                <Button>Contact</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
