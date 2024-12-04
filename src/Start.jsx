import React, {useState} from 'react';
import {game} from "./constants.js";

const Start = ({setPage,setUserName}) => {
    const [name, setName] = useState('');

    const handleStart = () => {
        setUserName(name);
        setPage(game);
    };


    return (
        <div>
            <header>Ready For War</header>
            <input type={'text'} placeholder={'enter your name'}
                value={name}
                onChange={e=>setName(e.target.value.toUpperCase())}/>
                <button onClick={handleStart}>start</button>

        </div>
    );
};

export default Start;