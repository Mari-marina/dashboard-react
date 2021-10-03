import style from "./Channels.module.css";
import ArticleHeader from "../article-header/ArticleHeader";

function Channels(props) {
  return (
    <article className={style.channels}>
      <img className={style.channelsImg} src={props.miniature} alt="" />
      <ArticleHeader className={style.titleChannels} title={props.title} />
    </article>
  );
}

export default Channels;
