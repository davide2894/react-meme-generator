import "./Meme.scss";

export default function Meme() {
    return (
        <div className="meme">
            <form action="/" className="form">
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
        </div>
    )
}
