import styles from "./ContactContent.module.css";

const ContactContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactInformation}>
        <p className={styles.title}>If you have any problem, please contact our customer services</p>
        <ul>
          <li>Email: test@test.com</li>
          <li>Phone Number: 0944112442</li>
          <li>Available from Monday to Friday (10-16)</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactContent;
