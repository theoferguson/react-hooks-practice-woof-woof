import React,{useState} from 'react'

function DogDisplay({dogDisplay}){
    const [goodDog, setGoodDog] = useState(dogDisplay.isGoodDog)

    function handleButtonClick(){
        setGoodDog(!goodDog)
        fetch(`http://localhost:3001/pups/${dogDisplay.id}`,
       { method : 'PATCH',
        headers : { 'Content-Type': 'application/json' },
        body : JSON.stringify({'isGoodDog': goodDog})}
        )
    }
    
    console.log(dogDisplay)
    return(
        <>
        <img src={dogDisplay.image} alt={dogDisplay.name}></img>
        <h2>{dogDisplay.name}</h2>
        <button onClick={handleButtonClick}>{goodDog? 'Good Dog!': 'Bad Dog!'}</button>
        </>
    )

}



export default DogDisplay;