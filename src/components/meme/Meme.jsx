import "./Meme.scss";
import memesData from "../../data/data";
import { useState } from "react";

export default function Meme() {
    /**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */

    const [memeImageUrl, setMemeImageUrl] = useState("");
    const memesArray = memesData.data.memes;
    
    function getRandomMemeImageUrl() {
        const randomNumber = Math.floor(Math.random() * memesArray.length);
    
        return memesArray[randomNumber].url;
    }

    function onSubmit(evt) {
        evt.preventDefault();
        setMemeImageUrl(getRandomMemeImageUrl());
    }
    
    return (
        <div className="meme">
            <form action="/" className="form" onSubmit={onSubmit}>
                <input 
                    type="text" 
                    className="form__inputField"
                    id="memeFirstLine" 
                    name="meme first line" 
                    placeholder="write meme first line here" 
                />
                <input 
                    type="text" 
                    className="form__inputField"
                    id="memeSecondLine" 
                    name="meme second line" 
                    placeholder="write meme second line here" 
                />
                <button type="submit" className="form__button">Get a new meme image  🖼</button>
            </form>
            <div className="meme_imgContainer">
                <img className="meme__image" src={memeImageUrl} />
            </div>
        </div>
    )
}
