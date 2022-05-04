import React from "react";
import style from './styles.module.scss';

export const Modal = () => {
    return (
        <div className={style.modal}>
            <div className={style.modal__wrapper}></div>
            <div className={style.modal__content}>

                <div className={style.modal__header}>
                    <button>close</button>
                </div>

                <div className={style.modal__body}>
                    body
                </div>

                <div className={style.modal__footer}>
                    footer
                </div>

            </div>
        </div>
    )
}