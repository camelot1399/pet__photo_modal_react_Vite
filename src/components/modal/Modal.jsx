import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../../store/modal/actions";
import { getSelectedPhoto } from "../../store/photos";
import style from './styles.module.scss';

export const Modal = () => {
    const dispatch = useDispatch();
    const item = useSelector(getSelectedPhoto);

    console.log('item', item);

    return (
        <div className={style.modal}>
            <div className={style.modal__wrapper}></div>
            <div className={style.modal__content}>

                <div className={style.modal__header}>
                    <button onClick={() => dispatch(setModal(false))}>close</button>
                </div>

                <div className={style.modal__body}>
                    {item.id}
                </div>

                <div className={style.modal__footer}>
                    footer
                </div>

            </div>
        </div>
    )
}