import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../components/modal/Modal";
import { Photos } from "../components/photos/Photos";
import { createPhotosActions, getPhotos } from "../store/photos";

export const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchPhotos();
    }, [])

    const photos = useSelector(getPhotos);
    const [isModal, setIsModal] = useState(true);

    console.log('photos', photos);

    const fetchPhotos = async () => {
        const API_PHOTOS = 'https://boiling-refuge-66454.herokuapp.com/images';
        const photos = await fetch(API_PHOTOS);
        const res = await photos.json();

        console.log('res', res);

        dispatch(createPhotosActions(res));
    }

    return (
        <div className="home">
            <h1>Карточки</h1>

            {!photos && (<div>фоток нет</div>)}
            {photos && (
                <Photos photos={photos} />
            )}

            {isModal && (<Modal />)}
           
        </div>
    )
}