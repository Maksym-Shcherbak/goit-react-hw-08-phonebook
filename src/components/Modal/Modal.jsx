import css from './Modal.module.css';
import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ children, setModal }) => {
  const oncCloseByEsc = useCallback(
    e => {
      if (e.code === 'Escape') {
        setModal(false);
      }
    },
    [setModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', oncCloseByEsc);
    document.body.style.top = `-${window.scrollY}px`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };
  }, [oncCloseByEsc]);

  const onBackdropClick = ({ target, currentTarget }) => {
    if (currentTarget === target) {
      setModal(false);
    }
  };

  return (
    <div className={css.overlay} onClick={onBackdropClick}>
      <div className={css.modalContent}>{children}</div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
};
