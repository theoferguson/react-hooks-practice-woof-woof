import React, {useState, useEffect} from "react";
import { v4 as uuid } from 'uuid';
import DogBar from './DogBar'
import DogDisplay from "./DogDisplay";


function App() {
  
  const[dogList, setDogList]= useState([])
  const[dogDisplay, setDogDisplay] = useState('')
  const [filterDogs, setFilterDogs] = useState(false)
  const dogBarList = dogList.map(dog=>
    {if(!filterDogs){
      return(
    <DogBar 
    id={dog.id}
    name={dog.name}
    img={dog.img}
    dog={dog}
    setDogDisplay={setDogDisplay}
    />)} 
    else if (dog.isGoodDog === filterDogs){
      return(<DogBar 
        id={dog.id}
        name={dog.name}
        img={dog.img}
        dog={dog}
        setDogDisplay={setDogDisplay}
        />)
    }

  })
  

  useEffect(()=>{
    fetch( 'http://localhost:3001/pups')
      .then(resp=> resp.json())
      .then(data=> {setDogList(data);
      });
      },[]);
      console.log(dogList)

  function handleFilterClick (){
    setFilterDogs(!filterDogs)
  }


  return (
    <div className="App">
      <div id="filter-div">
        <button onClick={handleFilterClick} id="good-dog-filter">Filter good dogs:{filterDogs? 'ON' : 'OFF'} </button>
      </div>
      <div id="dog-bar">
        {/* <DogBar dogList={dogList} setDogList={setDogList}/> */}
        {dogBarList}
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <DogDisplay dogDisplay={dogDisplay}/>
        </div>
      </div>
    </div>
  );
}

export default App;
