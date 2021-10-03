import style from "./Description.module.css";

function Description(props) {
  return <h3 className={style.subTitle}>{props.subTitle}</h3>;
}
export default Description;
