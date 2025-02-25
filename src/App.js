// frontend-ui/src/App.js
import React, { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/api')
            .then(response => response.json())
            .then(data => setMessage(data.message));
    }, []);

    return (
        <div>
            <h1>Frontend UI</h1>
            <p>Message from Backend: {message}</p>
        </div>
    );
}

export default App;

