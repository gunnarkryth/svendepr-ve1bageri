import s from "./newsletter.module.scss";

export const Newsletter = () => {
  return (
    <section className={s.newsletter}>
      <div className={s.signupForm}>
        <hgroup>
          <h2>Tilmed dig vores nyhedsbrev</h2>
          <h5>
            Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
            udgaver
          </h5>
        </hgroup>
        <form action="">
          <img src="/assets/icons/email_24dp_FAFAFA.svg" alt="" />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="     Indtast din email..."
          />
          <button>Tilmeld</button>
        </form>
      </div>
    </section>
  );
};
