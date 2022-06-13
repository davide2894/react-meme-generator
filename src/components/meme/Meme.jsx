import "./Meme.scss";
import memesData from "../../data/data";
import { useState } from "react";

export default function Meme() {
    /**
     * Challenge: 
     * 1. Set up the text inputs to save to
     *    the `topText` and `bottomText` state variables.
     * 2. Replace the hard-coded text on the image with
     *    the text being saved to state.
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

    function handleChange(evt){
        //update input value
        //update meme text
        //state can be just meme, that updates both parts of the page
        
        const {name, value} = evt.target;
        
        setMeme(prevMemeState => {
            return {
                ...prevMemeState,
                [name]: value
            }
        });
    }
    
    return (
        <div className="meme">
            <form action="/" className="form" onSubmit={onSubmit}>
                <input 
                    type="text" 
                    className="form__inputField"
                    id="memeFirstLine" 
                    name="topText"
                    placeholder="write meme first line here"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    className="form__inputField"
                    id="memeSecondLine" 
                    name="bottomText" 
                    placeholder="write meme second line here"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button type="submit" className="form__button">Get a new meme image  🖼</button>
            </form>
            <div className="meme__imgContainer">
                <img alt="random meme" className="meme__image" src={meme.randomImage} />
                <h2 className="meme__text meme__text--top">{meme.topText}</h2>
                <h2 className="meme__text meme__text--bottom    ">{meme.bottomText}</h2>
            </div>
        </div>
    )
}
