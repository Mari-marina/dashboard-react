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
          <img className={style.itemImg} src={item1} alt="" />
          Home
        </li>
        <li className={style.item}>
          <img className={style.itemImg} src={item2} alt="" />
          Explore
        </li>
        <li className={style.item}>
          <img className={style.itemImg} src={item3} alt="" />
          Saved
        </li>
        <li className={style.item}>
          <img className={style.itemImg} src={item4} alt="" />
          Subscriptions
        </li>
        <li className={style.item}>
          <img className={style.itemImg} src={item5} alt="" />
          Messages
        </li>
        <li className={style.item}>
          <img className={style.itemImg} src={item6} alt="" />
          Settings
        </li>
      </ul>
    </div>
  );
}
export default Navigation;
