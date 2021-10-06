import style from "./Navigation.module.css";
// import item1 from "./../../assets/images/item1.svg";
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
            <svg
              className={style.navImg}
              width="24"
              height="23"
              viewBox="0 0 24 23"
            >
              <path d="M24 12.0534L12 0L0 12.0534H2.31282V23H10.7891V15.7023H13.2109V23H21.6872V12.0534H24ZM8.36731 13.2697V20.5674H4.73461V10.7277L12 3.42993L19.2654 10.7277V20.5674H15.6327V13.2697H13.2109H10.7891H8.36731Z" />
            </svg>
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
