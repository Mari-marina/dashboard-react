import style from "./News.module.css";
import Time from "../time/Time";
import Label from "../label/Label";
import ArticleHeader from "../article-header/ArticleHeader";

function News(props) {
  return (
    <article className={style.News}>
      <img className={style.previewImg} src={props.preview} alt="" />
      <div className={style.infoWrap}>
        <ArticleHeader className={style.titleNews} title={props.title} />
        <div className={style.wrapp}>
          <Label label={props.label} />
          <Time />
        </div>
      </div>
    </article>
  );
}

export default News;
