import s from "./card.module.scss";

export const Card = ({ image, title, description }) => {
  return (
    <div className={s.card}>
      <img src={image} alt="" />
      <h4 className={s.title}>{title}</h4>
      <article>
        <p>{description}</p>
      </article>
    </div>
  );
};
