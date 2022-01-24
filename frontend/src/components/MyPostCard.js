import React from "react";

export const PostCard = (props) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <div class="card-body">
                <h5 class="card-title">{props.name}</h5>
                <p class="card-text">{props.content}</p>
                <button type="submit" class="btn btn-primary">Edit Post</button>
                <button type="button" class="btn btn-success">Delete</button>
            </div>
        </div>
    )
}