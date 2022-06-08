import "./Meme.scss";
import memesData from "../../data/data";
import { useState } from "react";

export default function Meme() {
    /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, _] = useState(memesData.data.memes)
    
    function getRandomMemeImageUrl() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length);
        return allMemeImages[randomNumber].url;
    }

    function onSubmit(evt) {
        evt.preventDefault(evt);
        const randomMemeUrl = getRandomMemeImageUrl();
        setMeme(prevMemeState => ({...prevMemeState, randomImage: randomMemeUrl}));
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
                <img alt="random meme" className="meme__image" src={meme.randomImage} />
            </div>
        </div>
    )
}
