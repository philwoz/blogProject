import React from "react";

export const AddPost = (props) => {
    return (
        <form>
            <div class="mb-3">
                <label for="exampleInputPostTitle1" class="form-label">Title</label>
                <input type="UTitle" class="form-control" id="exampleInputUser1" aria-describedby="userlHelp"></input>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Post</button>
        </form>
    )
}