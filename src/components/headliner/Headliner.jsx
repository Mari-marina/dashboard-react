import style from "./Headliner.module.css";
import likeIcon from "./../../assets/images/like.svg";
import dislikeIcon from "./../../assets/images/dislike.svg";
import Time from "../time/Time";
import Label from "../label/Label";
import ArticleHeader from "../article-header/ArticleHeader";

function Headliner(props) {
  return (
    <article className={style.Headliner}>
      <img className={style.thumbnailImg} src={props.thumbnail} alt="" />
      <div className={style.info}>
        <ArticleHeader title={props.title} />

        <div className={style.rating}>
          <div className={style.like}>
            <img className={style.likeIcon} src={likeIcon} alt="" />
            <span className={style.text}>10.8k</span>
          </div>
          <div className={style.dislike}>
            <img className={style.dislikeIcon} src={dislikeIcon} alt="" />
            <span className={style.text}>1.4k</span>
          </div>
        </div>
        <div className={style.wrapper}>
          <Label label={props.label} />
          <Time />
        </div>
      </div>
    </article>
  );
}

export default Headliner;
