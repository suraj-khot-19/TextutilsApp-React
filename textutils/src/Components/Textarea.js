import React from 'react';
import { useState } from 'react';
export default function Textarea(props) {

    const [text, setText] = useState("");
    const [alert, setAlert] = useState("");

    function handelAlert(newAlert) {
        setAlert(newAlert);
        setTimeout(() => {
            setAlert("");
        }, 3000);
    }

    function handleOnChange(event) {
        setText(event.target.value);
    }

    function handleUpperCase() {
        let newText = text;
        setText(newText.toUpperCase());
        handelAlert("Converted to upper Case");
    }

    function handleLowerCase() {
        let newText = text;
        setText(newText.toLowerCase());
        handelAlert("Converted to Lower Case");
    }

    function handleRemoveExtraSpace() {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
        handelAlert("Removed Extra Space");
    }

    function handleCopy() {
        let newText = text;
        navigator.clipboard.writeText(newText);
        handelAlert("Copied to Clipboard");
    }

    function handleClearText() {
        let newText = "";
        setText(newText);
        handelAlert("Text is Cleared");
    }
    let btnColor=props.theme==='light'?'dark':'light';
    return (
        <>
            <div className='container my-3' style={{ height: '50px' }}>
                {
                    alert.length === 0 ? <h2 className='text-center'> TextUtils Is Fun</h2> : <div>
                        <div className="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{alert}</strong>
                        </div>
                    </div>
                }
            </div>
            <div className="text-center my-2">
                <h3>Enter Text To Perform Any Task</h3>
            </div>
            <div className="container my-3">
                <div className="mb-3">
                    <textarea placeholder='Enter text here...' style={props.theme === 'light' ? { backgroundColor: '#aaaacf', fontWeight: 'bold' } : { backgroundColor: 'grey', fontWeight: 'bold' }} value={text} onChange={handleOnChange} className="form-control" id="TextformId" rows="8"></textarea>
                </div>
            </div>
            <div className="container my-5">
    
                <button disabled={text.length === 0} type="button" onClick={handleUpperCase} className={`btn btn-outline-${btnColor} mx-3 my-2`}>Convert To Upper Case</button>
                <button disabled={text.length === 0} type="button" onClick={handleLowerCase} className={`btn btn-outline-${btnColor} mx-3 my-2`}>Convert To Lower Case</button>
                <button disabled={text.length === 0} type="button" onClick={handleRemoveExtraSpace} className={`btn btn-outline-${btnColor} mx-3 my-2`}>Remove Extra Space</button>
                <button disabled={text.length === 0} type="button" onClick={handleCopy} className={`btn btn-outline-${btnColor} mx-3 my-2`}>Copy To Clipboard</button>
                <button disabled={text.length === 0} type="button" onClick={handleClearText} className={`btn btn-outline-${btnColor} mx-3 my-2`}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h4>Preview</h4>
                <h6>{text.split(/\s+/).filter((e) => { return e.length !== 0 }).length} Words {text.trim().length} Characters</h6>
                <p>
                    {text.length === 0 ? "Enter Text To Preview!" : text}
                </p>
            </div>
        </>
    )
}
