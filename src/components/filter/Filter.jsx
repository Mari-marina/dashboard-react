import style from "./Filter.module.css";
import arrowIcon from "./../../assets/images/arrow.svg";
import Description from "../description/Description";

function Filter(props) {
  return (
    <div className={style.filter}>
      <img className={style.aimIcon} src={props.miniIcon} alt="" />
      <Description className={style.subTitle} subTitle={props.subTitle} />
      <div className={style.filterBtn}>
        <img className={style.arrowIconTop} src={arrowIcon} alt="" />
        <img className={style.arrowIconBottom} src={arrowIcon} alt="" />
      </div>
    </div>
  );
}
export default Filter;
