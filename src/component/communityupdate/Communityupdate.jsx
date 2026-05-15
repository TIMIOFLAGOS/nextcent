import { memo } from "react";
import style from "./communityupdate.module.css";
import img1 from "../../assets/community-update-img-1.png";
import img2 from "../../assets/community-update-img-2.png";
import img3 from "../../assets/community-update-img-3.png";

const Communityupdate = () => {
  return (
    <div className={style.communityupdateSection}>
      <div>
        <h2 className={style.communityupdateTitle}>
          Caring is the new markerting
        </h2>
        <p className={style.communityupdateDesc}>
          {" "}
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.{" "}
        </p>
      </div>

      <div className={style.cards}>
        <div className={style.card}>
          <img src={img1} alt="" />
          <div className={style.content}>
            <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>

            <a href="#">Readmore →</a>
          </div>
        </div>

        <div className={style.card}>
          <img src={img2} alt="" />
          <div className={style.content}>
            <h3>What are your safeguarding responsibilities and how can you manage them?</h3>

            <a href="#">Readmore →</a>
          </div>
        </div>
        <div className={style.card}>
          <img src={img3} alt="" />
          <div className={style.content}>
            <h3>Revamping the Membership Model with Triathlon Australia</h3>

            <a href="#">Readmore →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Communityupdate);
