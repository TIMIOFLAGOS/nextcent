import styles from "./community.module.css";
const Community = () => {
  return (
  <div>
      <section className={styles.communitySection}>
        <div className={styles.communityContents}>
          <div className={styles.communityTitle}>
            <h2>Manage your entire community in a single system</h2>
            <p>Who is Nextcent suitable for?</p>
          </div>

<div className={styles.communityCardsAll}>
              <div className={styles.communityCard}>
            <div className={styles.communityCardHead}>
              <img src="/src/assets/community-Icon-1.png" alt="" />
              <h2>Membership Organisations</h2>
            </div>
            <p>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>

          <div className={styles.communityCard}>
            <div className={styles.communityCardHead}>
              <img src="/src/assets/icon7777.png" alt="" />
              <h2>National Associations</h2>
            </div>
            <p>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>

          <div className={styles.communityCard}>
            <div className={styles.communityCardHead}>
              <img src="/src/assets/community-Icon-3.png" alt="" />
              <h2>Clubs And Groups</h2>
            </div>
            <p>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
</div>
        </div>
      </section>
    </div>
  );
};

export default (Community);