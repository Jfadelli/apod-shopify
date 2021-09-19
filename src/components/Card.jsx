import React from 'react';
import '../style.css'
import LikeButton from './LikeButton'

const  Card = () => {
return(
    <div class="mainCard">
        <img class="pod" alt="pod" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/NGC_4414_%28NASA-med%29.jpg/1200px-NGC_4414_%28NASA-med%29.jpg"></img>
        <p>
            description
        </p>
        <LikeButton />
    </div>
)
}
export default Card