import s from "./about.module.scss";

import { Card } from "../card/Card";

export const About = () => {
  return (
    <section className={s.about}>
      <hgroup>
        <h2>Vi skaber lækkert brød!</h2>
        <h5>
          Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
          udgaver har gennemgået forandringer, når nogen har tilføjet humor
          eller tilfældige ord, som på ingen måde ser ægte ud
        </h5>
      </hgroup>
      <div className={s.cardContainer}>
        <Card
          image={"public/assets/images/bread/article.jpg"}
          title={"Kreativitet dyrkes"}
          description={
            "Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud"
          }
        />
        <Card
          image={"public/assets/images/bread/article2.jpg"}
          title={"Vi elsker brød"}
          description={
            "Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud"
          }
        />
        <Card
          image={"public/assets/images/bread/article3.jpg"}
          title={"Sans for detaljer"}
          description={
            "Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud"
          }
        />
      </div>
    </section>
  );
};
