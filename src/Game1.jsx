// eslint-disable-next-line no-unused-vars
import React, {useEffect, useRef, useState} from 'react';
import {result,createDeck} from "./constants.js";

const Game1 = ({setPage, userName}) => {
    const [computerDeck, setComputerDeck] = useState([]);
    const [userDeck, setUserDeck] = useState([]);
    const [compCard, setCompCard] = useState('');
    const [userCard, setUserCard] = useState('');


    useEffect(() => {
        const deck=createDeck();
        console.log(deck)
        setUserDeck(deck.slice(0,26));
        setComputerDeck(deck.slice(26,52));
        console.log(computerDeck)
        setCompCard('');
        setUserCard("Let's start! Click next to open the cards");
    }, []);

    const game = () => {
        if (userDeck.length > 0) {
            const compNow = computerDeck.pop();
            setCompCard(`${compNow.rank}:${compNow.suit}`);
            const userNow = userDeck.pop();
            setUserCard(`${userNow.rank}:${userNow.suit}`);
        } else {
            setPage(result)
        }

    }

    return (
        <div>
            <p>Computer</p>
            <div>{compCard}</div>
            <div>{userCard}</div>
            <p>{userName}</p>
            <button onClick={game}>Next</button>

        </div>
    );
};

export default Game1;