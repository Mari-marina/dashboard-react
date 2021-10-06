import style from "./Profit.module.css";
import layer1 from "./../../assets/images/layer1.png";
import layer2 from "./../../assets/images/layer2.png";
import layer3 from "./../../assets/images/layer3.png";
import fire from "./../../assets/images/fire.svg";
import pointer from "./../../assets/images/pointer.svg";

function Profit(props) {
  return (
    <div className={style.wrapper}>
      <div className={style.img}>
        <img className={style.layre1} src={layer1} alt="" />
        <img className={style.layre2} src={layer2} alt="" />
        <img className={style.layre3} src={layer3} alt="" />
      </div>
      <div className={style.wrapContent}>
        <img className={style.imgFire} src={fire} alt="" />
        <h1 className={style.title}>
          Subscribe to our <br /> new plan
          <span className={style.titleOrange}>$25 </span>
        </h1>
        <p className={style.text}>
          It is a limited time offer that <br /> will expire soon.
        </p>
        <button className={style.btn}>
          <p className={style.btnText}>Subscribe now</p>
          <img className={style.imgPointer} src={pointer} alt="" />
        </button>
      </div>
    </div>
  );
}
export default Profit;
