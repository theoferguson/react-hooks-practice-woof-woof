import React, { useState, useEffect } from "react";
import DogBar from './DogBar'
import DogDisplay from "./DogDisplay";
import InitData from "./Init"


function App() {

  const [dogList, setDogList] = useState([])
  const [dogDisplay, setDogDisplay] = useState('')
  const [filterDogs, setFilterDogs] = useState(false)

  const dogBarList = dogList.map(dog => {
    if (!filterDogs) {
      return (
        <DogBar
          id={dog.id}
          name={dog.name}
          img={dog.img}
          dog={dog}
          setDogDisplay={setDogDisplay}
        />)
    }
    else if (dog.isGoodDog === filterDogs) {
      return (<DogBar
        id={dog.id}
        name={dog.name}
        img={dog.img}
        dog={dog}
        setDogDisplay={setDogDisplay}
      />)
    }

  })

  InitData({setDogList, dogList})

  function handleFilterClick() {
    setFilterDogs(!filterDogs)
  }


  return (
    <div className="App">
      <div id="filter-div">
        <button onClick={handleFilterClick} id="good-dog-filter">Filter good dogs:{filterDogs ? 'ON' : 'OFF'} </button>
      </div>
      <div id="dog-bar">
        {/* <DogBar dogList={dogList} setDogList={setDogList}/> */}
        {dogBarList}
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <DogDisplay dogDisplay={dogDisplay} dogList={dogList} setDogList={setDogDisplay} />
        </div>
      </div>
    </div>
  );
}

export default App;
