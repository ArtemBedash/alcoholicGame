import React from 'react';
import Game from './Game.jsx';
import Game1 from './Game1.jsx';
import {game} from "./constants.js";
const Result = ({setPage,userCount,compCount}) => {
    const userResult = userCount;
    console.log(userResult)
    const compResult = compCount;
    let result='draw';

    if(userResult>compResult){

          result='win'
    }
    if(userResult<compResult){
        result='lose'
    }

    return (
        <div>
            <p>{result}</p>
            <p>You-{userResult} Comp-{compResult}</p>
            <button onClick={()=>setPage(game)}>Again?</button>
            
        </div>
    );
};

export default Result;