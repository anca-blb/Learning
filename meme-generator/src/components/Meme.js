import React from "react"



export default function Meme() {

    

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([])
    
    // save all memes array to state allMemes
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data=> setAllMemes(data.data.memes))
    }, [])

    //get a random image url from allMemes state and update the meme state random image
    function getMemeImage() {
        const randomNum = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNum].url
        
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: url
            }
        } )
    }

        //get the value from inputs
        function handleChange (event) {
            const {name, value} = event.target
            setMeme(prevMeme => {
                return {
                    ...prevMeme,
                    [name]: value
                }
            })
        }

    return (
        <main className="meme-container">
            <div className="form">
                <input 
                placeholder="top text"
                type= "text"
                name="topText"
                className="form-input"
                onChange={handleChange}
                value={meme.topText}
                />

                <input 
                placeholder="bottom text"
                type="text"
                name="bottomText"
                className="form-input"
                onChange={handleChange}
                value={meme.bottomText}
                />

                <button  onClick={getMemeImage} className="form-btn">Get a new meme image 🖼</button>
            </div>

            <div className="meme">
                <img className="meme-image" alt="" src={meme.randomImage} />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}