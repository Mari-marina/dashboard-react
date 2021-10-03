import style from "./Filter.module.css";
import aimIcon from "./../../assets/images/miniIcon1.png";
import arrowIcon from "./../../assets/images/arrow.svg";
import Description from "../description/Description";

function Filter(props) {
  return (
    <div className={style.filter}>
      <img className={style.aimIcon} src={aimIcon} alt="" />
      <Description subTitle={props.subTitle} />
      <div className={style.filterBtn}>
        <img className={style.arrowIconTop} src={arrowIcon} alt="" />
        <img className={style.arrowIconBottom} src={arrowIcon} alt="" />
      </div>
    </div>
  );
}
export default Filter;
