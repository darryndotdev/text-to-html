import { useState } from 'react';

import Hero from './components/Hero/Hero';
import Form from './components/Form/Form';
import Centralised from './components/UI/Centralised/Centralised';

function App() {
    const [input, setInput] = useState('');

    function handleSetInput() {
        setInput(input);

        console.log('input from parent: app');
        console.log(input);
    }

    return (
        <>
            <Centralised>
                <Hero />
                <Form onInput={handleSetInput} />
            </Centralised>
        </>
    );
}

export default App;
