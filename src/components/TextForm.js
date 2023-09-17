import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{color: props.mode === 'dark'?'white' : '#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey' : 'white', color:props.mode === 'dark'?'white' : '#042743'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lovercase</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark'?'white' : '#042743'}}>
                <h2>Your Text summery</h2>
                <p>{text.split(" ").length} words, {text.length}</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something to preview it here"}</p>
            </div>
        </>
    )
}
