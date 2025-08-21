import { useState } from 'react';

const Form = ({ onInput }) => {
    const [textToConvert, setTextToConvert] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (!textToConvert) return;

        onInput(textToConvert);
    }

    function handleReset() {
        setTextToConvert('');
    }

    return (
        <>
            <h2>Paste text</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={textToConvert}
                    onChange={(e) => setTextToConvert(e.target.value)}
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
