import React, { useState } from 'react'

function DogDisplay({ dogDisplay, setDogList, dogList }) {
    const [goodDog, setGoodDog] = useState(dogDisplay.isGoodDog)

    function handleButtonClick() {
        
        fetch(`http://localhost:3000/pups/${dogDisplay.id}`,
            {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 'isGoodDog': goodDog })
            }
        )
            .then(res => res.json())
            .then(json => {
                // setDogList(json)
                setGoodDog(!goodDog)
                console.log(dogList)
            })
    }


    console.log(dogDisplay)
    return (
        <>
            <img src={dogDisplay.image} alt={dogDisplay.name}></img>
            <h2>{dogDisplay.name}</h2>
            <button onClick={handleButtonClick}>{goodDog ? 'Good Dog!' : 'Bad Dog!'}</button>
        </>
    )

}



export default DogDisplay;