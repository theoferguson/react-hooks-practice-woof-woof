import React, { useState, useEffect } from "react";

function InitData({setDogList, dogList}) {
    useEffect(() => {
        fetch('http://localhost:3000/pups')
            .then(resp => resp.json())
            .then(data => {
                setDogList(data);
            });
    }, []);
    console.log(dogList)
}

export default InitData;