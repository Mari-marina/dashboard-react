import style from "./Time.module.css";
import clockIcon from "./../../assets/images/cloсk.svg";

function Time() {
  return (
    <div className={style.time}>
      <img className={style.timeIcon} src={clockIcon} alt="" />
      <span className={style.timeText}>2:00 pm</span>
    </div>
  );
}
export default Time;
