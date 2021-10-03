import style from "./Label.module.css";

function Label(props) {
  return <span className={style.label}>{props.label}</span>;
}

export default Label;
