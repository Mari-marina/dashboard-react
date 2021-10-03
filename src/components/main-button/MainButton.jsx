import style from "./MainButton.module.css";
import arrowIcon from "./../../assets/images/arrow.svg";

function MainButton() {
  return (
    <button className={style.mainButton}>
      See all
      <img className={style.arrowIcon} src={arrowIcon} alt="" />
    </button>
  );
}
export default MainButton;
