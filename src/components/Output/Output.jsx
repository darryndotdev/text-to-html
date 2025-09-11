const Output = ({ textToConvert }) => {
    return (
        <div>
            <p>{textToConvert ? `<p>${textToConvert}</p>` : ''}</p>
        </div>
    );
};

export default Output;
