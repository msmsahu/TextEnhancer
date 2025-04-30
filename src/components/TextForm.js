import React,{useState} from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const clickForUppercase = () => {
        let updatedText = text.toUpperCase();
        setText(updatedText);
        props.showAlert("Updated to uppercase","success");
    }
    const clickForLowercase= () =>{
        let updatedText = text.toLowerCase();
        setText(updatedText);
        props.showAlert("Updated to lowercase","Success");
    }
    const clearText = () =>{
        setText('');
        props.showAlert("Text cleared","Success");
    }
    const copyText = () => {
      let selectdText = document.getElementById('myBox');
      navigator.clipboard.writeText(text); 
      selectdText.select();
      props.showAlert("Copied to clipboard","Success");
    }
    const clearExtraSpace = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra space removed","Success");

    }
    const [text, setText] = useState('Enter text here');
  return (
    <div>
<div className={`container mb-3 my-5 ${props.mode === 'light' ? 'text-dark' : 'text-light'}`}>
  <h3>Please insert your text below</h3>
  <textarea className="form-control" style={{backgroundColor : props.mode === "dark" ? 'lightsteelblue' : '' }} rows="8" value={text} onChange={handleOnChange} id="myBox"></textarea>
  <button className="btn btn-primary mx-1 my-3" onClick={clickForUppercase}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-1 my-3" onClick={clickForLowercase}>Convert to Lowercase</button>
  <button className="btn btn-primary mx-1 my-3" onClick={clearText}>Clear Text</button>
  <button className="btn btn-primary mx-1 my-3" onClick={copyText}>Copy Text</button>
  <button className="btn btn-primary mx-1 my-3" onClick={clearExtraSpace}>Clear extra space</button>
   

    <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </div>
    </div>
  )
}
