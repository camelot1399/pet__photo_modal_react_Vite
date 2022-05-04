import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedPhotoAction } from "../../store/photos";
import { readableStream } from '../../utils/utils';
import style from './style.module.scss';

export const Photo = ({url, id}) => {

    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedPhoto !== null) {
            selectItem();
        }
    }, [selectedPhoto])

    const selectItem = async () => {
        const BASE_URL = `https://boiling-refuge-66454.herokuapp.com/images/${id}`;

        const commits = await readableStream(BASE_URL);
        dispatch(setSelectedPhotoAction(commits));

    }

    return (
        <div 
            key={id} 
            className="photo" 
            onClick={() => setSelectedPhoto(id)}
        >
            <img src={url} alt="" />
        </div>
    )
}