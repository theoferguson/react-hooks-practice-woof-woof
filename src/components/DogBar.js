import React from "react";

function DogBar({id, name, img, dog, setDogDisplay}){
    function handleSpanClick(){
        setDogDisplay(dog)
    }
    
    return(
        <>
         <span onClick={handleSpanClick} key={dog.id}>{dog.name}</span>
        </>
        )
}


export default DogBar;