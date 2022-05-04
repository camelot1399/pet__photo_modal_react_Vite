import React, { useEffect, useState } from "react";
import { Photos } from "../components/photos/Photos";

export const HomePage = () => {

    useEffect(() => {
        fetchPhotos();
    }, [])

    const [photos, setPhotos] = useState(null);
    const [isModal, setIsModal] = useState(false);

    const fetchPhotos = async () => {
        const API_PHOTOS = 'https://boiling-refuge-66454.herokuapp.com/images';
        const photos = await fetch(API_PHOTOS);
        const res = await photos.json();

        setPhotos(res);
    }

    return (
        <div className="home">
            <h1>Карточки</h1>

            {!photos && (<div>фоток нет</div>)}
            {photos && (
                <Photos photos={photos} />
            )}
           
        </div>
    )
}