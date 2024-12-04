import {useState} from 'react'
import Start from "./Start.jsx";
import Game from "./Game.jsx";
import Game1 from "./Game1.jsx";
import './App.css'
import Result from "./Result.jsx";
import {game, result, start} from './constants.js';


function App() {

    const [state, setState] = useState(start)
    const [userName, setUserName] = useState('You');
    const [userCount, setUserCount] = useState(0);
    const [compCount, setCompCount] = useState(0);


    switch (state) {

        case game:
            return <Game setPage={setState} userName={userName} setCompCount={setCompCount} setUserCount={setUserCount}
                         userCount={userCount} compCount={compCount}/>
        case result:
            return <Result setPage={setState} userCount={userCount} compCount={compCount}/>
        default:
            return <Start setPage={setState} setUserName={setUserName}/>
    }


}

export default App
