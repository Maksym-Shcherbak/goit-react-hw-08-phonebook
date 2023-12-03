import css from './Button.module.css';

export const Button = ({ setModal }) => {
  const onOpenModal = () => setModal(true);
  return (
    <button className={css.addButton} type="button" onClick={onOpenModal}>
      <span className={css.btnText}>Add contact </span>
      <span>+</span>
    </button>
  );
};
