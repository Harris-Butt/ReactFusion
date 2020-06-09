import React from 'react';
import ReactDOM from 'react-dom';
import { MediaCard } from './MediaCard'
import { Gate } from './Gate';

const imageUrl = "https://images.wallpapersden.com/image/download/small-spiderman_67061_320x240.jpg";

ReactDOM.render(
    <div>
        <MediaCard imageUrl= {imageUrl} title={<h1>Happy</h1>} body ={[<b>Happy Birthday </b>,"Dear"]} />
        <Gate isOpen = {false} />
    </div>
    ,document.getElementById("root"))