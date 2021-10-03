import style from "./Navigation.module.css";
import item1 from "./../../assets/images/item1.svg";
import item2 from "./../../assets/images/item2.svg";
import item3 from "./../../assets/images/item3.svg";
import item4 from "./../../assets/images/item4.svg";
import item5 from "./../../assets/images/item5.svg";
import item6 from "./../../assets/images/item6.svg";

function Navigation(props) {
  return (
    <div className={style.wrapper}>
      <ul className={style.list}>
        <li className={style.item}>
          <button className={style.btn}>
            <img className={style.navImg} src={item1} alt="" />
            <p className={style.navText}>Home</p>
          </button>
        </li>
        <li className={style.item}>
          <button className={style.btn}>
            <img className={style.navImg} src={item2} alt="" />
            Explore
          </button>
        </li>
        <li className={style.item}>
          <button className={style.btn}>
            <img className={style.navImg} src={item3} alt="" />
            Saved
          </button>
        </li>
        <li className={style.item}>
          <button className={style.btn}>
            <img className={style.navImg} src={item4} alt="" />
            Subscriptions
          </button>
        </li>
        <li className={style.item}>
          <button className={style.btn}>
            <img className={style.navImg} src={item5} alt="" />
            Messages
          </button>
        </li>
        <li className={style.item}>
          <button className={style.btn}>
            <img className={style.navImg} src={item6} alt="" />
            Settings
          </button>
        </li>
      </ul>
    </div>
  );
}
export default Navigation;
