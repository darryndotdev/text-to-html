const Form = ({ textToConvert, onSetTextToConvert }) => {
    function handleSubmit(e) {
        e.preventDefault();

        if (!textToConvert) return;
    }

    function handleReset() {
        onSetTextToConvert('');
    }

    return (
        <>
            <h2>Paste text</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={textToConvert}
                    onChange={(e) => onSetTextToConvert(e.target.value)}
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
