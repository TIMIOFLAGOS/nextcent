
import styles from "./hero.module.css";
import heroLogo from "../../assets/hero-img.png"


const Hero = () => {
  return (
       <div className={styles.heroContents}>
        <div className={styles.heroLeft}>
          <div className={styles.heroLeftTitle}>
            <h2>
              Lessons and insights <br />
              <span>from 8 years</span>
            </h2>
            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
          </div>
          <div>
            <button className={styles.heroLeftBtn}>Register</button>
          </div>
        </div>

        <div className={styles.heroRight}>
          <img src={heroLogo} alt="" />
        </div>
      </div>
  );
};

export default (Hero);