import Navbar from "./components/Navbar"
import Main from "./components/Main"
import React, {useEffect, useState} from "react"
import './App.css';

function App() {

  const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=2d59cb4a32cd4c43a70d764ea1c34fec"

  const [arr, setArr] = React.useState([])


   async function SetValues(){
    
    const response =  await fetch(url);
    const json =  await response.json();

    setArr([json.articles[0].title,
            json.articles[0].description,
            json.articles[1].title,
            json.articles[1].description,
            json.articles[2].title,
            json.articles[2].description,
            json.articles[3].title,
            json.articles[3].description
    ])

  }

  useEffect(() => {
    SetValues();
  }, []);

  return (
    <><Navbar />
    <Main 
      title1 = {arr[0]}
      desc1 = {arr[1]}
      title2 = {arr[2]}
      desc2 = {arr[3]}
      title3 = {arr[4]}
      desc3 = {arr[5]}
      title4 = {arr[6]}
      desc4 = {arr[7]}

    /></>
  );
}

export default App;
