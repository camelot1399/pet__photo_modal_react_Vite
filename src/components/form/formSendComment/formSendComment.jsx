import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getSelectedPhoto } from "../../../store/photos";
import style from './style.module.scss';
import { readableStream } from '../../../utils/utils';

export const FormSendComment = () => {
    const [textarea, setTextarea] = useState('');
    const {id} = useSelector(getSelectedPhoto);

    const submit = (e) => {
        e.preventDefault();
        console.log('submit');
        setTextarea('');

        fetchComment();
    }

    const fetchComment = async () => {
        const BASE_URL = `https://boiling-refuge-66454.herokuapp.com/images/${id}/${textarea}`;
        const result = await readableStream(BASE_URL, 'POST')

        if (result.status === 204) {
            console.log('OK');
        }

        console.log('result', result);
    }

    return (
        <form className={style.formSendComment}>
            <textarea 
                className={style.textarea}
                onChange={(e) => setTextarea(e.target.value)}
                value={textarea}
            ></textarea>
            <button
                onClick={(e) => submit(e)}
            >Отправить</button>
        </form>
    )
}