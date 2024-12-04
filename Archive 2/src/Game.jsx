// eslint-disable-next-line no-unused-vars
import React, {useEffect, useRef, useState} from 'react';
import {result,createDeck} from "./constants.js";

const Game = ({setPage, userName,setUserCount,setCompCount,userCount,compCount}) => {


    let computerDeck = useRef([]);
    let userDeck= useRef([]);
    const [compCard, setCompCard] = useState('');
    const [userCard, setUserCard] = useState('');


    useEffect(() => {
        const deck=createDeck();
        console.log(deck)
        userDeck.current=deck.slice(0,26);
        computerDeck.current=deck.slice(26,52);
        setCompCard('./src/assets/cards/RED_BACK.svg');
        setUserCard('./src/assets/cards/RED_BACK.svg');
        setCompCount(0);
        setUserCount(0)
    }, []);

    const game = () => {

        if (userDeck.current.length) {
            const compNow = computerDeck.current.pop();
            // setCompCard(`${compNow.rank}:${compNow.suit}`);

            setCompCard(compNow.img);

            const userNow = userDeck.current.pop();
            // setUserCard(`${userNow.rank}:${userNow.suit}`);
            setUserCard(userNow.img);
            if(compNow.rank>userNow.rank){
                setCompCount(setCompCount=>setCompCount+1)
                console.log(compNow.rank)
                console.log(userNow.rank)


            }
            if(userNow.rank>compNow.rank){
                setUserCount(setUserCount=>setUserCount+1)
                console.log(compNow.rank)
                console.log(userNow.rank)
            }

        } else {
            setPage(result)
        }

    }

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <p>Computer {compCount}</p>
            <img src={compCard} alt='compCard'/>
            <img src={userCard} alt='userCard'/>
            <p>{userName} {userCount}</p>
            <button onClick={game}>Next</button>

        </div>
    );
};

export default Game;