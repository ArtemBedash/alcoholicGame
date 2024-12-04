export const game = 'game'
export const result = 'result'
export const start = 'start'
export const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
export const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']


const images = [
    './src/assets/cards/2C.svg',
    './src/assets/cards/3C.svg',
    './src/assets/cards/4C.svg',
    './src/assets/cards/5C.svg',
    './src/assets/cards/6C.svg',
    './src/assets/cards/7C.svg',
    './src/assets/cards/8C.svg',
    './src/assets/cards/9C.svg',
    './src/assets/cards/10C.svg',
    './src/assets/cards/11JC.svg',
    './src/assets/cards/12QC.svg',
    './src/assets/cards/13KC.svg',
    './src/assets/cards/14AC.svg',
    './src/assets/cards/2D.svg',
    './src/assets/cards/3D.svg',
    './src/assets/cards/4D.svg',
    './src/assets/cards/5D.svg',
    './src/assets/cards/6D.svg',
    './src/assets/cards/7D.svg',
    './src/assets/cards/8D.svg',
    './src/assets/cards/9D.svg',
    './src/assets/cards/10D.svg',
    './src/assets/cards/11JD.svg',
    './src/assets/cards/12QD.svg',
    './src/assets/cards/13KD.svg',
    './src/assets/cards/14AD.svg',
    './src/assets/cards/2H.svg',
    './src/assets/cards/3H.svg',
    './src/assets/cards/4H.svg',
    './src/assets/cards/5H.svg',
    './src/assets/cards/6H.svg',
    './src/assets/cards/7H.svg',
    './src/assets/cards/8H.svg',
    './src/assets/cards/9H.svg',
    './src/assets/cards/10H.svg',
    './src/assets/cards/11JH.svg',
    './src/assets/cards/12QH.svg',
    './src/assets/cards/13KH.svg',
    './src/assets/cards/14AH.svg',
    './src/assets/cards/2S.svg',
    './src/assets/cards/3S.svg',
    './src/assets/cards/4S.svg',
    './src/assets/cards/5S.svg',
    './src/assets/cards/6S.svg',
    './src/assets/cards/7S.svg',
    './src/assets/cards/8S.svg',
    './src/assets/cards/9S.svg',
    './src/assets/cards/10S.svg',
    './src/assets/cards/11JS.svg',
    './src/assets/cards/12QS.svg',
    './src/assets/cards/13KS.svg',
    './src/assets/cards/14AS.svg'
];


export const createDeck = () => {

    const deck = [];
    const sortDeck = [];
    for (let i = 0; i < suits.length; i++) {

        for (let j = 0; j < ranks.length; j++) {

            deck.push({rank: ranks[j], suit: suits[i], img: images[j]});

        }

    }
    console.log(deck);




    for (let i = deck.length; i > 0; i--) {
        const randomInteger = Math.floor(Math.random() * i);
        sortDeck.push(deck[randomInteger]);
        deck.splice(randomInteger, 1);


    }
    console.log("Deck before shuffle:", deck);
    console.log("Deck after shuffle:", sortDeck);

    return sortDeck;


}
