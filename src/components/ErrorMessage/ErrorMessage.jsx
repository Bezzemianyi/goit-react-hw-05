import s from "./ErrorMessage.module.css";
function ErrorMessage() {
  return <p className={s.error}>Can't connect to the server...</p>;
}

export default ErrorMessage;
