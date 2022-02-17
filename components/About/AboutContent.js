import styles from './AboutContent.module.css'

const AboutContent = () => {
    return (
        <div className={styles.container}> 
            <div className={styles.header}> <h1>NextJs Restaurant</h1></div>
            <div className={styles.content}>Established from 2008, we are an organization that willing to bring you <br/> the best experience at our restaurant also bringign the Asian atmosphere to the European.</div>
        </div>
       
    )
}

export default AboutContent