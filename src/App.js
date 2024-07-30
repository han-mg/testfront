import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');

    const fetchHello = async () => {
        try {
            const response = await axios.get('http://mingyu.sku-sku.com/hello');
            setMessage(response.data);
        } catch (error) {
            console.error('Error fetching the hello message', error);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={fetchHello}>Hello</button>
                {message && <p>{message}</p>}
            </header>
        </div>
    );
}

export default App;
