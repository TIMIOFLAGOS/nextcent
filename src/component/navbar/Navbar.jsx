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
            <h2 className={styles.companyname}>Nexcent</h2>
          </div>
<nav>
            {navBardata.map((item) => (
              <a className={styles.nav} key={item.id}>
                {item.pathName} 
              </a>
            ))}
          </nav>
          

         
          <div  className={styles.loginReg}>
              <button className={styles.login}>
              <a href="">Login</a>
            </button>
             <div className={styles.reg}>
            <button>
              <a href="">Register Now</a>
            </button>
          </div>
        </div>
          </div>
      </section>
    </header>
  );
};

export default Navbar;
