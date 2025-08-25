import { useState } from 'react';

import Hero from './components/Hero/Hero';
import Form from './components/Form/Form';
import Centralised from './components/UI/Centralised/Centralised';

function App() {
    const [textToConvert, setTextToConvert] = useState('');

    return (
        <>
            <Centralised>
                <Hero />
                <Form
                    textToConvert={textToConvert}
                    onSetTextToConvert={setTextToConvert}
                />
            </Centralised>
        </>
    );
}

export default App;
