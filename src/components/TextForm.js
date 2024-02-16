import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = ()=>{
        //console.log("LowerCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleTrimClick = ()=>{
        //console.log("Trim was clicked" + text);
        let newText = text.trim();
        setText(newText);
    }
    const handleOnChange = (event)=>{
       // console.log("On Change");
        setText(event.target.value);
    }
    const[text, setText] = useState('Enter text here');
    //setText("Updated value of text is written here");

    


  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} value={text}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleTrimClick}>Trim the text</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p> {text.split(" ").length} words and {text.length} characters </p>
        <p>Estimated reading time: {0.008 * text.split(" ").length} Minutes</p>
        <h3>Preview:</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
