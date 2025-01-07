import { Button } from "../button/Button";

export const Modal = ({ children }) => {
  return (
    <div className={s.modalContainer}>
      <div className={s.modal}>
        {children}
        <Button />
      </div>
    </div>
  );
};
