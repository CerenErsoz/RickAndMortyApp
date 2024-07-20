
import React from 'react';
import {Button } from 'react-native';

function HelloWorld() {
    const [message, setMessage] = useState;

 // Buraya buton ve tıklama olayını ekleyin
    const handleClick = () => {
        setMessage("Saçmalık");
    }

    return (
        <div>
            <h1>Merhaba</h1>
            <Button onClick={handleClick}></Button>
        </div>
    );
}

export default HelloWorld;