import classes from "./Modal.module.css";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
};

const Modal = ({ children, isOpen, onClick }: Props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={onClick}></div>
      <dialog open={isOpen} className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
