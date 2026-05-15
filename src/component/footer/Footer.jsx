import { memo } from 'react';
import style from "./footer.module.css";
import fimg from "../../assets/logom.png"
const Fotter = () => {
  return (
    <div className={style.footerSection}>
    <div className={style.footerup}>
      <h1>
Pellentesque suscipit fringilla libero eu.
      </h1>
      <button>
        <a href="">Get a Demo  →</a>
      </button>
    </div>
    <div className={style.footerdown}>
<div className={style.footerright}>

<img src={fimg} alt="" />

<div>
  <img src={fimg} alt="" />
<p>Nextcent</p>
</div>
<div>
  <p>copyright © 2023 Nextcent ltd</p>
</div>
<div>
  
</div>








    </div>







    <div className={style.footerleft}>
    </div>
    </div> 

    </div>
  );
};

export default memo(Fotter);