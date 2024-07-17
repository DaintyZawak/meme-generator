import memesData from "../memesData";
import { useEffect, useState } from "react";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/ibj.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);
  
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))
  }, []) 

  function getMemeImage() {
    
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));

    // url = memesArray[randomNumber].url
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
  }

  return (
    <main>
      <div className="formContainer">
        <div className="textBox">
          <h3 className="topText">Top text</h3>
          <label for="text1">
            <input
              type="text"
              id="text1"
              className="text"
              placeholder="Shut up"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="textBox">
          <h3 className="topText">Bottom text</h3>
          <label for="text2">
            <input
              type="text"
              id="text2"
              className="text"
              placeholder="And take my money"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
          </label>
        </div>

       
      </div>
      <div className="button">
        <button onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
      <img src={meme.randomImage} className="memeImg" />
      <h2 className="memeTxtTop">{meme.topText}</h2>
      <h2 className="memeTxtBtm">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
