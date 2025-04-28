import { Component, useEffect } from 'react';
import s from './Modal.module.css';

export const Modal = ({Show, children}) => {
  useEffect(() => {
    window.addEventListener('keydown', onEsc);
  }, []);

  useEffect(() => {
    return ()=>{
      window.removeEventListener('keydown', onEsc);
    }
  },);

  const onEsc = e => {
    if (e.key === 'Escape') {
      Show();
    }
  };

  const onClose = e => {
    if (e.target === e.currentTarget) {
      Show();
    }
  };

  return (
    <div onClick={onClose} className={s.backdrop}>
      <div className={s.modal}>{children}</div>
    </div>
  );
};
