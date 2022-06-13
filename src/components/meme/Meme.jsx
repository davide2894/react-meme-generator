import "./Meme.scss";
import { useState, useEffect } from "react";

export default function Meme() {
    /**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(res => {
            setAllMemes(res.data.memes)
        })
    },[]);


    function getRandomMemeImageUrl() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        return allMemes[randomNumber].url;
    }

    function onSubmit(evt) {
        evt.preventDefault(evt);
        const randomMemeUrl = getRandomMemeImageUrl();
        setMeme(prevMemeState => ({...prevMemeState, randomImage: randomMemeUrl}));
    }

    function handleChange(evt){        
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
