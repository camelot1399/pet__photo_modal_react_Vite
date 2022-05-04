import React from "react";

export const Photo = ({url, id}) => {

    return (
        <div className="photo">
            <img src={url} alt="" />
        </div>
    )
}