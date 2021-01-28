import React, { useState, useEffect } from 'react';

const BuncoDice = () => {

  const [playerName, setPlayerName] = useState('');
  const [totalPoints, setTotalPoints] = useState(0);
  const [roundOneScore, setRoundOneScore] = useState(0);
  const [roundTwoScore, setRoundTwoScore] = useState(0);
  const [roundThreeScore, setRoundThreeScore] = useState(0);
  const [roundFourScore, setRoundFourScore] = useState(0);
  const [roundFiveScore, setRoundFiveScore] = useState(0);
  const [roundSixScore, setRoundSixScore] = useState(0);
  const [diceRolls, setDiceRolls] = useState([]);

  useEffect(() => {
    setTotalPoints(roundOneScore + roundTwoScore + roundThreeScore + roundFourScore + roundFiveScore + roundSixScore)
  }, [roundOneScore, roundTwoScore, roundThreeScore, roundFourScore, roundFiveScore, roundSixScore])


  const addPointsAfterRoll = (roundNumber, points) => {
    if (roundNumber === 1) {
      console.log('points', points)
      console.log('roundOneScore', roundOneScore)
      setRoundOneScore(points + roundOneScore)
      console.log('roundOneScore', roundOneScore)
    } else if (roundNumber === 2) {
      setRoundTwoScore(points + roundTwoScore)
    } else if (roundNumber === 3) {
      setRoundThreeScore(points + roundThreeScore)
    } else if (roundNumber === 4) {
      setRoundFourScore(points + roundFourScore)
    } else if (roundNumber === 5) {
      setRoundFiveScore(points + roundFiveScore)
    } else {
      setRoundSixScore(points + roundSixScore)
    }
  }

  const sides = 6;
  const rollDice = (roundNumber) => {
    let dice1Roll = Math.floor(Math.random() * sides) + 1
    let dice2Roll = Math.floor(Math.random() * sides) + 1
    let dice3Roll = Math.floor(Math.random() * sides) + 1

    diceRolls.push(([dice1Roll, dice2Roll, dice3Roll]));

    console.log(dice1Roll, dice2Roll, dice3Roll, diceRolls)

    if (dice1Roll === roundNumber && dice2Roll === roundNumber && dice3Roll === roundNumber) {
      addPointsAfterRoll(roundNumber, 21)
      rollDice(roundNumber)
    }
    else if (dice1Roll === dice2Roll && dice2Roll === dice3Roll) {
      addPointsAfterRoll(roundNumber, 5)
      rollDice(roundNumber)
    }
    else if (dice1Roll === roundNumber || dice2Roll === roundNumber || dice3Roll === roundNumber) {
      if (dice1Roll === dice2Roll && dice1Roll === roundNumber) {
        addPointsAfterRoll(roundNumber, 2)
        rollDice(roundNumber)
      } else if (dice1Roll === dice3Roll && dice1Roll === roundNumber) {
        addPointsAfterRoll(roundNumber, 2)
        rollDice(roundNumber)
      } else if (dice2Roll === dice3Roll && dice2Roll === roundNumber) {
        addPointsAfterRoll(roundNumber, 2)
        rollDice(roundNumber)
      } else {
        addPointsAfterRoll(roundNumber, 1)
        rollDice(roundNumber)
      }
    } else {
      setDiceRolls([]);
    }
  }

  return (
    <section className='' id=''>
      <h1 className=''>Bunco Dice</h1>
      <h2 className=''>Let the computer do the work</h2>
      <input placeholder='Player Name' onChange={(e) => setPlayerName(e.target.value)}></input>
      <h2>{playerName}</h2>
      <h3>Total Score {totalPoints}</h3>
      <div>
        <div>{roundOneScore}</div>
        <button onClick={() => rollDice(1)}>Roll Dice</button>
      </div>
      <div>
        <div>{roundTwoScore}</div>
        <button onClick={() => rollDice(2)}>Roll Dice</button>
      </div>
      <div>
        <div>{roundThreeScore}</div>
        <button onClick={() => rollDice(3)}>Roll Dice</button>
      </div>
      <div>
        <div>{roundFourScore}</div>
        <button onClick={() => rollDice(4)}>Roll Dice</button>
      </div>
      <div>
        <div>{roundFiveScore}</div>
        <button onClick={() => rollDice(5)}>Roll Dice</button>
      </div>
      <div>
        <div>{roundSixScore}</div>
        <button onClick={() => rollDice(6)}>Roll Dice</button>
      </div>


    </section>
  )
}

export default BuncoDice;