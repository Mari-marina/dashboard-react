import style from "./ArticleHeader.module.css";

function ArticleHeader(props) {
  return <h1 className={style.title}>{props.title}</h1>;
}

export default ArticleHeader;
