import styles from "./navbar.module.css";

import logom from "../../assets/logom.png";
import { navBardata } from "../data.js";

const Navbar = () => {
  return (
    <header>
      <section className={styles.container}>
        <div className={`${styles.headerContents} container`}>
          <div className={styles.logom}>
            <img src={logom} alt="Client 7" />
            <h2>Nexcent</h2>
          </div>
<nav>
            {navBardata.map((item) => (
              <a className={styles.nav} key={item.id}>
                {item.pathName}
              </a>
            ))}
          </nav>
          

          <div className={styles.reg}>
            <button>
              <a href="">Register Now</a>
            </button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Navbar;
