import React from "react";
import { Comment } from "../comment/Comment";
import style from './style.module.scss';

export const Comments = ({comments}) => {
    return (
        <div className={style.comments}>
            {!comments && (<div>комметариев нет</div>)}
            {comments && (
                comments.map(comment => (<Comment comment={comment} />))
            )}
        </div>
    )
}