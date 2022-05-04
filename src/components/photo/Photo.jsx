import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedPhotoAction } from "../../store/photos";
import { apiGetSelectedPhoto } from "../../utils/api";

export const Photo = ({url, id}) => {

    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedPhoto !== null) {
            selectItem();
        }
    }, [selectedPhoto])

    const selectItem = async () => {
        const result = await fetch(apiGetSelectedPhoto(id));

        if (result.status === 200) {
            dispatch(setSelectedPhotoAction(result));
        } else {
            console.log('ошибка');
        }

    }

    return (
        <div className="photo" onClick={() => setSelectedPhoto(id)}>
            <img src={url} alt="" />
        </div>
    )
}