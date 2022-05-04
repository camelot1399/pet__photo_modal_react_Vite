import React from "react";
import { Photo } from "../photo/Photo";
import './style.css';

export const Photos = ({photos}) => {
    return (
        <div className="photosList">
            {photos.map(el => (
                <Photo 
                    id={el.id} 
                    url={el.url} 
                />
            ))}
        </div>
    )
}