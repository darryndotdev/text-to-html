import { useState } from 'react';

const Form = ({ onSetTextToConvert }) => {
    const [text, setText] = useState('');

    function processText(input) {
        const parts = input
            .split('.')
            .map((x) => x.replace(/\s+/g, ' ').trim())
            .filter((x) => x.length > 0);

        const wrapped = parts.map((s) => `<p>${s}</p>`).join('\n');

        return wrapped;
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!text) return;

        onSetTextToConvert(processText(text));
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
                <div className='grid'>
                    <button>Convert text</button>
                    <button onClick={handleReset} className='outline'>
                        Reset
                    </button>
                </div>
            </form>
        </>
    );
};

export default Form;
