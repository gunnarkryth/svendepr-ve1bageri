export const Button = ({ children, clickButton }) => {
  return <button onClick={clickButton}>{children}</button>;
};
