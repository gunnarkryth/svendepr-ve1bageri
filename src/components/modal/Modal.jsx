import { Button } from "../button/Button";

export const Modal = ({ children }) => {
  return (
    <div className={s.modalWrapper}>
      <div className={s.modal}>{children}
        <Button/>
      </div>
    </div>
  );
};
