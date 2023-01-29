import { useState } from 'react';

function Hotel() {
    const [word, setword] = useState('Eat')

    function handleClick() {
        setword('Drink')
    }
    return (
        <div>
            <h1>{word} at Chings</h1>
            <button onClick={handleClick}>Click Here</button>
        </div>
    );
}

export default Hotel;