import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../components/modal/Modal";
import { Photos } from "../components/photos/Photos";
import { setModal } from "../store/modal/actions";
import { getModalStatus } from "../store/modal/selectors";
import { createPhotosActions, getPhotos, getSelectedPhoto } from "../store/photos";
import { apiPhotosList } from "../utils/api";

export const HomePage = () => {
    const dispatch = useDispatch();
    const photos = useSelector(getPhotos);
    const selectedPhoto = useSelector(getSelectedPhoto);
    const isModal = useSelector(getModalStatus);

    useEffect(() => {
        fetchPhotos();
    }, [])

    useEffect(() => {
        if (selectedPhoto !== null) {
            dispatch(setModal(true));
        } else {
            dispatch(setModal(false));
        }
    }, [selectedPhoto])

    const fetchPhotos = async () => {
        const photos = await fetch(apiPhotosList());
        const res = await photos.json();

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