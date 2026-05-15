import styles from "./unlock.module.css";

const Unlock = () => {
  return (
         <div className={styles.unlockContents}>
          <div className={styles.unlockLeft}>
            <img src="/src/assets/unlock-section-img.png" alt="" />
          </div>
          <div className={styles.unlockRight}>
            <div className={styles.unlockRightContent1}>
              <h3>The unseen of spending three years at Pixelgrade</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </p>
            </div>

            <div className={styles.unlockRightContent10}>
              <button>Learn More</button>
            </div>

          </div>
        </div>
   
  );
};

export default (Unlock);