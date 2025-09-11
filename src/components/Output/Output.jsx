const Output = ({ textToConvert }) => {
    return (
        <>
            <h2>Copy converted text</h2>
            <form>
                <textarea
                    defaultValue={textToConvert}
                    rows='4'
                    cols='40'
                    readOnly={true}
                ></textarea>
                <div className='grid'>
                    <button>Copy to clipboard</button>
                </div>
            </form>
        </>
    );
};

export default Output;
