import styles from "./achievement.module.css";

const Achievement = () => {
  return (
<div className={styles.C}>
      <section className={styles.acheivmentSection}>
        <div className={styles.acheivmentSectionContent}>
          <div className={styles.acheivmentSectionLeft}>
            <h3>
              Helping a local <br />
              <span>business reinvent itself</span>
            </h3>
            <p>We reached here with our hard work and dedication</p>
          </div>
          <div className={styles.acheivmentSectionRight}>
            <div className={styles.acheivmentSectionRight1}>
              <div className={styles.acheivmentSectionRight1Contents1}>
                <div>
                  <img src="/src/assets/acheiv-img-1.png" alt="" />
                </div>
                <div className={styles.acheivmentSectionRight1Contents}>
                  <h4>2,245,341</h4>
                  <p>Members</p>
                </div>
              </div>
              <div className={styles.acheivmentSectionRight1Contents1}>
                <div>
                  <img src="/src/assets/acheiv-img-2.png" alt="" />
                </div>
                <div className={styles.acheivmentSectionRight1Contents}>
                  <h4>2,245,341</h4>
                  <p>Members</p>
                </div>
              </div>
            </div>
            <div className={styles.acheivmentSectionRight2}>
              <div className={styles.acheivmentSectionRight1Contents1}>
                <div>
                  <img src="/src/assets/acheiv-img-3.png" alt="" />
                </div>
                <div className={styles.acheivmentSectionRight1Contents}>
                  <h4>2,245,341</h4>
                  <p>Members</p>
                </div>
              </div>
              <div className={styles.acheivmentSectionRight1Contents1}>
                <div>
                  <img src="/src/assets/acheiv-img-4.png" alt="" />
                </div>
                <div className={styles.acheivmentSectionRight1Contents}>
                  <h4>2,245,341</h4>
                  <p>Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default(Achievement);