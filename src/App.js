import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Game from './components/Game'
import Cards from './components/Cards'

function App () {
  const [score, setScore] = useState(0);
  const [record, setRecord] = useState(0);
  const [pickedFilms, setPickedFilms] = useState([]);
  const [randomCards, setRandomCards] = useState(Cards)
  useEffect(() => {
    if (score > record) {
        setRecord(score)
    }
}, [score,record])

function pick (name) {
  if (pickedFilms.includes(name)) {
    setScore(0);
    setPickedFilms([]);
  } else {
   setPickedFilms(pickedFilms.concat(name))
   setScore((prev) => prev + 1)
  }
}
function randomize (array) {
  for (let i = array.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    let element = array[i]
    array[i] = array[j];
    array[j] = element;
    
  }

}
useEffect(() => {
  let newCards = Cards;
  randomize(newCards);
  setRandomCards(newCards);
}, [score]);

  return (
    <div id='App'className='container'>
      <Header
       score={score}
       record={record} />
      <Game pick={pick} newcards={randomCards} />
    </div>
  )
}
export default App