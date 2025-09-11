import { useState } from 'react';

const Form = ({ onSetTextToConvert }) => {
    const [text, setText] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (!text) return;
        onSetTextToConvert(text);
    }

    function handleReset() {
        setText('');
        onSetTextToConvert('');
    }

    return (
        <>
            <h2>Paste text</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows='4'
                    cols='40'
                ></textarea>
                <div>
                    <button type='submit'>Convert text</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </form>
        </>
    );
};

export default Form;
