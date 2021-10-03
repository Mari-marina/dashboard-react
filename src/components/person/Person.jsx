import style from "./Person.module.css";
import magnifierIcon from "./../../assets/images/magnifier.svg";
import memuIcon from "./../../assets/images/menu.svg";
import userIcon from "./../../assets/images/user.svg";

function Person(props) {
  return (
    <div className={style.wrapper}>
      <button className={style.personBtn}>
        <img className={style.magnifierIcon} src={magnifierIcon} alt="" />
      </button>
      <input
        className={style.personInput}
        placeholder="Search for anything…"
      ></input>
      <img className={style.memuIcon} src={memuIcon} alt="" />
      <img className={style.userIcon} src={userIcon} alt="" />
    </div>
  );
}
export default Person;
