import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedPhotoAction } from "../../store/photos";

export const Photo = ({url, id}) => {

    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedPhoto !== null) {
            selectItem();
        }
    }, [selectedPhoto])

    const selectItem = async () => {
        const BASE_URL = 'https://boiling-refuge-66454.herokuapp.com/images';
        const response = await fetch(`${BASE_URL}/${id}`);

        const reader = await response.body.getReader();
        const contentLength = +response.headers.get('Content-Length');
        let receivedLength = 0;
        let chunks = [];

        while(true) {
            const {done, value} = await reader.read();
          
            if (done) {
              break;
            }
          
            chunks.push(value);
            receivedLength += value.length;
          }

          let chunksAll = new Uint8Array(receivedLength); // (4.1)
          let position = 0;
          for(let chunk of chunks) {
            chunksAll.set(chunk, position); // (4.2)
            position += chunk.length;
          }
          
          // Шаг 5: декодируем Uint8Array обратно в строку
          let result = new TextDecoder("utf-8").decode(chunksAll);
          
          // Готово!
          let commits = await JSON.parse(result);

          dispatch(setSelectedPhotoAction(commits));

    }

    return (
        <div key={id} className="photo" onClick={() => setSelectedPhoto(id)}>
            <img src={url} alt="" />
        </div>
    )
}